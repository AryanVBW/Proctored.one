interface LogoMarkProps {
  color?: string;
  accentColor?: string;
}

export default function LogoMark({
  color = '#14110D',
  accentColor = '#B8632F',
}: LogoMarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" style={{ color }}>
      <path
        d="M16 2.2 L27.8 9 L27.8 23 L16 29.8 L4.2 23 L4.2 9 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="16" cy="16" r="3.6" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="16" cy="16" r="1.5" fill={accentColor} />
      <line x1="16" y1="5.5" x2="16" y2="8.8" stroke="currentColor" strokeWidth="1.4" />
      <line x1="16" y1="23.2" x2="16" y2="26.5" stroke="currentColor" strokeWidth="1.4" />
      <line x1="5.5" y1="16" x2="8.8" y2="16" stroke="currentColor" strokeWidth="1.4" />
      <line x1="23.2" y1="16" x2="26.5" y2="16" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
