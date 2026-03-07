import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'TaxoBuddy';
export const size = { width: 1200, height: 600 };
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '40px' }}>
                    <svg width="120" height="120" viewBox="0 0 512 512" style={{ borderRadius: '50%' }}>
                        <circle cx="256" cy="256" r="256" fill="#fb923c" />
                    </svg>
                    <div style={{ fontSize: 100, fontWeight: 900, color: 'white', letterSpacing: '-0.05em' }}>
                        TAXO<span style={{ color: '#fb923c' }}>BUDDY</span>
                    </div>
                </div>
                <div style={{ fontSize: 36, color: '#a1a1aa', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Intelligence meets precision
                </div>
            </div>
        ),
        { ...size }
    );
}
