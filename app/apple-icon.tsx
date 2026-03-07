import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="180" height="180" viewBox="0 0 512 512">
                    <circle cx="256" cy="256" r="256" fill="#fb923c" />
                </svg>
            </div>
        ),
        { ...size }
    );
}
