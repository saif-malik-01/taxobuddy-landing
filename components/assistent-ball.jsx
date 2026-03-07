'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// --- GLSL SHADERS ---

const vertexShader = `
    varying vec2 vUv;
    varying float vDistort;
    
    uniform float uTime;
    uniform float uSpeed;
    uniform float uNoiseDensity;
    uniform float uNoiseStrength;
    uniform float uFrequency;
    uniform float uAmplitude;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

    float cnoise(vec3 P) {
        vec3 Pi0 = floor(P); vec3 Pi1 = Pi0 + vec3(1.0);
        Pi0 = mod289(Pi0); Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); vec3 Pf1 = Pf0 - vec3(1.0);
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz; vec4 iz1 = Pi1.zzzz;
        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0); vec4 ixy1 = permute(ixy + iz1);
        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);
        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);
        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x); vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z); vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x); vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z); vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, Pf0), dot(g100, vec3(Pf1.x, Pf0.yz)), dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z)), dot(g110, vec3(Pf1.xy, Pf0.z))));
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, vec3(Pf0.xy, Pf1.z)), dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z)), dot(g011, vec3(Pf0.x, Pf1.yz)), dot(g111, Pf1)));
        float n000 = norm0.x * dot(g000, Pf0); float n100 = norm0.y * dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = norm0.z * dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z)); float n110 = norm0.w * dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = norm1.x * dot(g001, vec3(Pf0.xy, Pf1.z)); float n101 = norm1.y * dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = norm1.z * dot(g011, vec3(Pf0.x, Pf1.yz)); float n111 = norm1.w * dot(g111, Pf1);
        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
        return 2.2 * n_xyz;
    }

    void main() {
        vUv = uv;
        float t = uTime * uSpeed;
        float distortion = cnoise((normal + t) * uNoiseDensity) * uNoiseStrength;
        vDistort = distortion;
        vec3 pos = position + (normal * distortion);
        float angle = sin(uv.y * uFrequency + t) * uAmplitude;
        float s = sin(angle);
        float c = cos(angle);
        mat2 r = mat2(c, -s, s, c);
        pos.xz = r * pos.xz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const fragmentShader = `
    varying vec2 vUv;
    varying float vDistort;
    
    uniform vec3 uColor1;
    uniform vec3 uColor2;

    void main() {
        vec3 color = mix(uColor1, uColor2, smoothstep(-0.2, 0.2, vDistort));
        float rim = 1.0 - dot(vec3(0.0, 0.0, 1.0), vec3(vUv, 1.0));
        color += pow(rim, 4.0) * 0.1;
        gl_FragColor = vec4(color, 1.0);
    }
`;

export default function AIAssistantOrb({
    size = 300,
    color1 = '#fb923c',
    color2 = '#ffd700',
    speed = 0.15,
    noiseStrength = 0.08,
    amplitude = 0.4,
    className = '',
}) {
    const mountRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const el = mountRef.current;
        if (!el) return;

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 3;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(size, size);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        el.appendChild(renderer.domElement);

        // --- Sphere ---
        const geometry = new THREE.SphereGeometry(1.2, 128, 128);
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uSpeed: { value: speed },
                uNoiseDensity: { value: 1.2 },
                uNoiseStrength: { value: noiseStrength },
                uFrequency: { value: 2.0 },
                uAmplitude: { value: amplitude },
                uColor1: { value: new THREE.Color(color1) },
                uColor2: { value: new THREE.Color(color2) },
            },
        });

        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // --- Animation Loop ---
        const animate = () => {
            rafRef.current = requestAnimationFrame(animate);
            material.uniforms.uTime.value = performance.now() * 0.001;
            sphere.rotation.y += 0.002;
            renderer.render(scene, camera);
        };
        animate();

        // --- Cleanup ---
        return () => {
            cancelAnimationFrame(rafRef.current);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            if (el.contains(renderer.domElement)) {
                el.removeChild(renderer.domElement);
            }
        };
    }, [size, color1, color2, speed, noiseStrength, amplitude]);

    return (
        <div
            ref={mountRef}
            className={className}
            style={{
                width: size,
                height: size,
                display: 'inline-block',
                cursor: 'default',
            }}
        />
    );
}
