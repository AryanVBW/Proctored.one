export default function FinalCTA() {
  return (
    <section id="cta" className="dark final-cta">
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <span className="eyebrow">Find your best hire</span>
        <h2 style={{ marginTop: '18px' }}>
          Meet the engineers who{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>actually think.</em>
        </h2>
        <p>
          Stop guessing. Get clear, objective signal on who reasons deeply, builds
          with intention, and is genuinely the best fit for your team.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="btn btn-copper" href="/book-demo">
            Book a Demo
          </a>
          <a
            className="btn btn-ghost"
            href="/control-panel"
            style={{
              borderColor: 'color-mix(in oklab, var(--paper) 25%, transparent)',
              color: 'var(--paper)',
            }}
          >
            Open the Control Panel →
          </a>
        </div>
      </div>

      {/* Decorative background mark */}
      <svg className="mark-bg" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <g stroke="#F8F4EA" strokeWidth="0.8" fill="none">
          <path d="M300 30 L520 165 L520 435 L300 570 L80 435 L80 165 Z" />
          <path d="M300 95 L460 195 L460 405 L300 505 L140 405 L140 195 Z" />
          <circle cx="300" cy="300" r="200" />
          <circle cx="300" cy="300" r="160" />
          <circle cx="300" cy="300" r="120" />
          <circle cx="300" cy="300" r="80" />
          <circle cx="300" cy="300" r="40" stroke="#D89A4E" />
          <circle cx="300" cy="300" r="240" stroke="#D89A4E" strokeDasharray="4 10" />
        </g>
      </svg>
    </section>
  );
}
