export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

        <h1>
          Anyone can ship code now.
          <br />
          The best engineers <span className="accent ink-underline">still think.</span>
        </h1>
        <p className="lead">
          We&rsquo;re not here to catch cheaters. We&rsquo;re here to help you find the people
          who genuinely reason, architect, and solve. Proctored One gives you the signal
          to confidently hire the best-fit minds, not just the best AI users.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="/book-demo">
            Book a Demo
          </a>
          <a className="btn btn-ghost" href="/control-panel">
            See the Control Panel →
          </a>
        </div>
      </div>

      {/* Decorative aperture / monitoring grid */}
      <svg className="hero-mark" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <g stroke="#1F4D3D" strokeWidth="0.6" fill="none" opacity="0.95">
          <path d="M300 30 L520 165 L520 435 L300 570 L80 435 L80 165 Z" strokeWidth="1.2" />
          <path d="M300 95 L460 195 L460 405 L300 505 L140 405 L140 195 Z" />
          <circle cx="300" cy="300" r="200" />
          <circle cx="300" cy="300" r="160" />
          <circle cx="300" cy="300" r="120" />
          <circle cx="300" cy="300" r="80" />
          <circle cx="300" cy="300" r="40" stroke="#B8632F" strokeWidth="1.2" />
          <circle cx="300" cy="300" r="8" fill="#B8632F" stroke="none" />
          <line x1="300" y1="100" x2="300" y2="180" />
          <line x1="300" y1="420" x2="300" y2="500" />
          <line x1="100" y1="300" x2="180" y2="300" />
          <line x1="420" y1="300" x2="500" y2="300" />
          <g stroke="#B8632F">
            <line x1="300" y1="86" x2="300" y2="110" />
            <line x1="300" y1="490" x2="300" y2="514" />
            <line x1="86" y1="300" x2="110" y2="300" />
            <line x1="490" y1="300" x2="514" y2="300" />
          </g>
          <circle cx="300" cy="300" r="240" strokeDasharray="4 10" stroke="#B8632F" opacity="0.7" />
        </g>
      </svg>
    </header>
  );
}
