const ROWS = [
  {
    label: 'What candidates build',
    hr: 'Algorithmic tasks in a sandbox',
    cs: 'Standardized coding tasks in a sandbox',
    rn: 'AI-resistant puzzles + DSA',
    us: 'Real features on your actual codebase',
  },
  {
    label: 'AI tools for candidates',
    hr: 'Built-in AI copilot (guarded modes)',
    cs: 'Cosmo AI copilot (GPT-4o)',
    rn: 'AI available, problems designed to limit it',
    us: 'Native Claude Code — same tool engineers use daily',
  },
  {
    label: 'AI interaction tracking',
    hr: 'Full AI transcripts + fluency grading',
    cs: 'Full Cosmo conversation log',
    rn: 'Limited visibility',
    us: 'Every prompt, acceptance, rejection captured & scored',
  },
  {
    label: 'How work is scored',
    hr: 'Pass/fail tests + automated review',
    cs: 'Standardized scoring framework',
    rn: 'AI-powered evaluation',
    us: '10+ independent AI agents on your custom rubric',
  },
  {
    label: 'Human vs. AI attribution',
    hr: '— Not available',
    cs: '— Not available',
    rn: '— Not available',
    us: 'Every line classified: human, AI-gen, or AI-modified',
    naStyle: true,
  },
  {
    label: 'Works on your codebase',
    hr: 'No — sandbox only',
    cs: 'No — sandbox only',
    rn: 'No — standardized problems',
    us: 'Yes — clone your repo, build real features',
    naStyle: true,
  },
  {
    label: 'Interviewer time required',
    hr: 'Varies — automated + human',
    cs: 'Automated + AI / human interviews',
    rn: 'Minimal — AI-powered',
    us: 'Zero — fully async, no engineer time',
  },
] as const;

export default function Compare() {
  return (
    <section id="compare">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Compare</span>
          <h2>The only platform built for how engineers actually work.</h2>
          <p>
            Other platforms bolted AI copilots onto sandbox puzzles. Proctored One was built
            around AI from day one — on your codebase, with full attribution.
          </p>
        </div>

        <div className="compare-table">
          <div className="compare-row head">
            <div />
            <div>HackerRank</div>
            <div>CodeSignal</div>
            <div>Rounds.so</div>
            <div>Proctored One</div>
          </div>
          {ROWS.map((row) => (
            <div className="compare-row" key={row.label}>
              <div className="rowtitle">{row.label}</div>
              <div style={row.naStyle ? { color: 'var(--muted)' } : {}}>{row.hr}</div>
              <div style={row.naStyle ? { color: 'var(--muted)' } : {}}>{row.cs}</div>
              <div style={row.naStyle ? { color: 'var(--muted)' } : {}}>{row.rn}</div>
              <div className="us">{row.us}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
