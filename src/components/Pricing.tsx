function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

const PLANS = [
  {
    name: 'Basic',
    price: '$199',
    per: '/mo',
    quota: '5 assessments / month',
    desc: 'For teams starting to hire with AI.',
    featured: false,
    cta: 'Get Started',
    ctaClass: 'btn-ghost',
    features: [
      'Standard interviews',
      'AI-generated debrief questions',
      'Session replay',
      'Code attribution analysis',
    ],
  },
  {
    name: 'Premium',
    price: '$499',
    per: '/mo',
    quota: '15 assessments / month',
    desc: 'For teams hiring at scale.',
    featured: true,
    badge: 'Most popular',
    cta: 'Get Started',
    ctaClass: 'btn-copper',
    features: [
      'Everything in Basic',
      'Max interviews with 12 review agents',
      '12 debrief questions per session',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: '',
    quota: 'Unlimited assessments',
    desc: 'For orgs with high-volume or custom needs.',
    featured: false,
    cta: 'Book a Call',
    ctaClass: 'btn-ghost',
    features: [
      'Everything in Premium',
      'Custom assessment templates',
      'SSO & team management',
      'Dedicated account manager',
      'Custom integrations & SLAs',
    ],
  },
] as const;

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2>Simple plans that scale with your hiring.</h2>
        </div>

        <div className="pricing">
          {PLANS.map((plan) => (
            <div className={`price-card${plan.featured ? ' featured' : ''}`} key={plan.name}>
              {plan.featured && 'badge' in plan && (
                <div className="badge-pop">{plan.badge}</div>
              )}
              <div className="tier-name">{plan.name}</div>
              <div className="desc">{plan.desc}</div>
              <div className="price">
                {plan.price}
                {plan.per && <span className="per">{plan.per}</span>}
              </div>
              <div className="quota">{plan.quota}</div>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>
                    <CheckIcon /> {f}
                  </li>
                ))}
              </ul>
              <a className={`btn ${plan.ctaClass}`} href="/book-demo">
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <div className="price-note">
          Need more assessments?{' '}
          <strong>$49 per additional assessment.</strong> Includes $5 Claude Code budget per
          assessment.
        </div>
      </div>
    </section>
  );
}
