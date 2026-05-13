'use client';

interface FaqItem {
  q: string;
  a: string;
  defaultOpen?: boolean;
}

const FAQS: FaqItem[] = [
  {
    q: 'Is our source code secure?',
    a: 'Each candidate gets an ephemeral, isolated fork of your repo. Sessions are sandboxed, network egress is restricted, and the workspace is destroyed after submission. We never train on your code, and SOC 2 Type II is in progress.',
    defaultOpen: true,
  },
  {
    q: 'How much does it cost?',
    a: 'Plans start at $199/mo for 5 assessments. Additional assessments are $49 each. Each assessment includes a $5 Claude Code budget for the candidate.',
  },
  {
    q: 'How do I get started?',
    a: "Book a 20-minute demo. We'll walk through a sample report from your repo and have your first assessment live the same day.",
  },
  {
    q: 'Do candidates need experience with AI coding tools?',
    a: "No. The IDE includes a short Claude Code primer. We don't penalize unfamiliarity; the AI-prompt-discipline agent grades how the tool was used, not how often.",
  },
  {
    q: 'What languages and frameworks are supported?',
    a: 'Anything that builds on a standard Linux container: TS/JS, Python, Go, Rust, Ruby, Java, C#, and more. If it has a Dockerfile, we run it.',
  },
  {
    q: 'How do candidates feel about the experience?',
    a: "94% post-assessment NPS. Candidates consistently say it's the first interview that felt like the actual job.",
  },
  {
    q: 'Can I see a sample report before committing?',
    a: 'Yes. Open the demo control panel for a full sample submission with multi-agent scoring, attribution, and replay.',
  },
  {
    q: 'Does Proctored One integrate with our ATS?',
    a: 'Greenhouse, Ashby, and Lever are first-class. Anything else, we ship a webhook in a day.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="paper">
      <div className="wrap">
        <div className="faq-grid">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 style={{ marginTop: '18px' }}>Common questions</h2>
            <p style={{ color: 'var(--muted)', marginTop: '18px', lineHeight: 1.55 }}>
              Still have questions about how Proctored One fits your team?
            </p>
            <a href="#cta" className="btn btn-primary" style={{ marginTop: '22px' }}>
              Book a Call
            </a>
          </div>
          <div>
            {FAQS.map((item) => (
              <details className="q" key={item.q} open={item.defaultOpen}>
                <summary>
                  {item.q}
                  <span className="ico">+</span>
                </summary>
                <div className="a">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
