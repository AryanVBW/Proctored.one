import type { Metadata } from 'next';
import Link from 'next/link';
import LogoMark from '@/components/LogoMark';
import BookDemoForm from '@/components/BookDemoForm';

export const metadata: Metadata = {
  title: 'Book a Demo',
  description:
    'Book a 30-minute live demo of Proctored One. See how to identify the best-fit engineers and top technical minds with clear, objective hiring signal.',
  openGraph: {
    title: 'Book a Demo | Proctored One',
    description:
      'Find the engineers who genuinely think. Book a 30-minute personalised demo with the Proctored One team.',
    url: 'https://proctored.one/book-demo',
  },
};

const TRUST = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 1 0-16 0" />
      </svg>
    ),
    label: 'About finding the best fit',
    sub: 'Clear signal on who reasons well, not a gotcha tool',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    label: '30 minutes, no slides',
    sub: 'Live product walkthrough shaped around your hiring process',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: 'Built for your team',
    sub: 'We walk through your stack, your role, your specific edge cases',
  },
];

const WHAT_TO_EXPECT = [
  {
    num: '01',
    title: 'See a real assessment end to end',
    desc: 'Walk through a complete session from setup to final scorecard. You\'ll see how candidates work, think, and approach problems in their own environment, on their own time.',
  },
  {
    num: '02',
    title: 'Meet the Deep Results dashboard',
    desc: '12 AI reviewers surface who reasoned independently, who leaned on models, and who actually solved the problem well. Objective signal, not gut feel.',
  },
  {
    num: '03',
    title: 'Bring your real hiring challenges',
    desc: 'Talk about the roles you struggle to screen for, the false positives that slipped through, or the brilliant candidates your process missed. We\'ll show you what Proctored One would have surfaced.',
  },
];

export default function BookDemoPage() {
  return (
    <>
      {/* Minimal nav */}
      <nav className="top">
        <div className="wrap row">
          <Link href="/" className="logo-mark" aria-label="Proctored One home">
            <LogoMark color="#14110D" accentColor="#B8632F" />
            <span className="word">Proctored One</span>
          </Link>
          <div className="links">
            <a href="/#platform">The Platform</a>
            <a href="/#pricing">Pricing</a>
            <Link href="/" className="btn btn-ghost" style={{ padding: '8px 16px' }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="book-demo-page">
        {/* ── Hero strip ── */}
        <section className="book-hero">
          <div className="wrap book-hero-inner">
            <div className="book-hero-copy">
              <span className="eyebrow">Book a Demo</span>
              <h1 className="book-hero-h1">
                We&rsquo;re here to find<br />
                your <span className="book-accent">best minds.</span>
              </h1>
              <p className="book-lead">
                Not to catch anyone. To give your team clear, honest signal on who
                genuinely thinks, builds with intention, and is the best fit for
                the role. A 30-minute live walkthrough of the full platform with no slides, just the product.
              </p>

              {/* Trust pills */}
              <div className="book-trust-row">
                {TRUST.map((t) => (
                  <div className="book-trust-item" key={t.label}>
                    <span className="book-trust-icon">{t.icon}</span>
                    <div>
                      <div className="book-trust-label">{t.label}</div>
                      <div className="book-trust-sub">{t.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form card */}
            <BookDemoForm />
          </div>
        </section>

        {/* ── What to expect ── */}
        <section className="book-expect">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">What to expect</span>
              <h2>A demo built around the people you actually want to hire.</h2>
              <p>We don&rsquo;t do generic product tours. We show you how Proctored One surfaces the engineers who think deeply, for your stack, your bar, your team.</p>
            </div>

            <div className="book-expect-grid">
              {WHAT_TO_EXPECT.map((item) => (
                <div className="book-expect-card" key={item.num}>
                  <span className="book-expect-num">{item.num}</span>
                  <h3 className="book-expect-title">{item.title}</h3>
                  <p className="book-expect-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Social proof strip ── */}
        <section className="book-proof dark">
          <div className="wrap">
            <div className="book-proof-inner">
              <div className="book-proof-quote">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <path d="M8 20c0-5.333 2.667-9.333 8-12L18 10c-3.333 1.333-5 3.333-5 6v2h4v8H8v-6zm14 0c0-5.333 2.667-9.333 8-12L32 10c-3.333 1.333-5 3.333-5 6v2h4v8H22v-6z" fill="var(--copper)" opacity="0.6" />
                </svg>
                <blockquote className="book-blockquote">
                  We finally hired someone we were genuinely confident in. Proctored One showed us
                  not just what the candidate built but how they thought through it. That
                  clarity changed how we make offer decisions entirely.
                </blockquote>
                <div className="book-quote-author">
                  <div className="book-quote-avatar">EP</div>
                  <div>
                    <div className="book-quote-name">Engineering Lead</div>
                    <div className="book-quote-co">Series B fintech · 40-person eng team</div>
                  </div>
                </div>
              </div>

              <div className="book-stats-col">
                <div className="book-stat">
                  <span className="book-stat-num">94%</span>
                  <span className="book-stat-lbl">of teams make a confident offer decision within 24 h of the debrief</span>
                </div>
                <div className="book-stat">
                  <span className="book-stat-num">12×</span>
                  <span className="book-stat-lbl">AI reviewers evaluate every submission to surface who genuinely excels</span>
                </div>
                <div className="book-stat">
                  <span className="book-stat-num">3×</span>
                  <span className="book-stat-lbl">more signal per assessment than a standard technical take-home</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ inline ── */}
        <section className="book-faq">
          <div className="wrap book-faq-inner">
            <h2 className="book-faq-title">Common questions</h2>
            <div className="book-faq-list">
              {[
                {
                  q: 'Is this about catching people, or evaluating them fairly?',
                  a: 'Evaluating them fairly. That\'s the whole point. We give every candidate the same structured environment and every team the same objective signal. The goal is to find the best-fit person for your role, not to play gotcha.',
                },
                {
                  q: 'What does Proctored One actually tell you about a candidate?',
                  a: 'It shows you how someone thinks: their problem-solving approach, how independently they worked, where they leaned on AI and where they didn\'t, and whether their reasoning matched the quality of their output. Far more signal than a take-home or a Zoom coding round.',
                },
                {
                  q: 'Does this replace our take-home assignment?',
                  a: 'Yes, it\'s a complete upgrade. Candidates work in a sealed, distraction-free workspace on their own machine, at their own pace. You get richer data and they get a fairer, less stressful experience than a timed Zoom call.',
                },
                {
                  q: 'Is there a free trial?',
                  a: 'Yes. We offer a fully-featured pilot for up to 3 assessments, no commitment. Bring the demo to your team and see the difference in the hiring conversations it enables.',
                },
              ].map((item) => (
                <div className="book-faq-item" key={item.q}>
                  <div className="book-faq-q">{item.q}</div>
                  <div className="book-faq-a">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="book-footer">
          <div className="wrap book-footer-inner">
            <Link href="/" className="logo-mark" aria-label="Proctored One home">
              <LogoMark color="#F8F4EA" accentColor="#D89A4E" />
              <span className="word" style={{ color: 'var(--paper)' }}>Proctored One</span>
            </Link>
            <p className="book-footer-copy">© 2026 Proctored One, Inc.</p>
            <div className="book-footer-links">
              <a href="/#pricing">Pricing</a>
              <a href="/#faq">FAQ</a>
              <a href="/">Home</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
