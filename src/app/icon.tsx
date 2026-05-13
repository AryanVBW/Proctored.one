import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg viewBox="0 0 32 32" width="100%" height="100%" style={{ color: '#14110D' }}>
          <path d="M16 2.2 L27.8 9 L27.8 23 L16 29.8 L4.2 23 L4.2 9 Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <circle cx="16" cy="16" r="3.6" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <circle cx="16" cy="16" r="1.5" fill="#B8632F" />
          <line x1="16" y1="5.5" x2="16" y2="8.8" stroke="currentColor" strokeWidth="1.4" />
          <line x1="16" y1="23.2" x2="16" y2="26.5" stroke="currentColor" strokeWidth="1.4" />
          <line x1="5.5" y1="16" x2="8.8" y2="16" stroke="currentColor" strokeWidth="1.4" />
          <line x1="23.2" y1="16" x2="26.5" y2="16" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
