import Link from 'next/link';

export default function ControlPanelPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--ink)',
        color: 'var(--paper)',
        fontFamily: "'Geist', sans-serif",
        textAlign: 'center',
        padding: '40px',
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: 'var(--amber)',
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}
      >
        Demo
      </div>
      <h1
        style={{
          fontFamily: "'Newsreader', serif",
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 500,
          color: 'var(--paper)',
          marginBottom: '20px',
          maxWidth: '20ch',
          lineHeight: 1.1,
        }}
      >
        Control Panel coming soon
      </h1>
      <p
        style={{
          color: 'color-mix(in oklab, var(--paper) 65%, transparent)',
          fontSize: '18px',
          maxWidth: '50ch',
          lineHeight: 1.5,
          marginBottom: '36px',
        }}
      >
        The full demo control panel will show a complete candidate submission with multi-agent scoring,
        line-by-line attribution, and session replay.
      </p>
      <Link
        href="/"
        className="btn btn-copper"
        style={{ textDecoration: 'none' }}
      >
        ← Back to Landing Page
      </Link>
    </div>
  );
}
