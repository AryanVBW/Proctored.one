const AI_TOOLS = [
  { name: 'Cursor', kind: 'IDE fork', status: 'ok' },
  { name: 'Claude Code', kind: 'CLI agent', status: 'ok' },
  { name: 'GitHub Copilot', kind: 'extension', status: 'ok' },
  { name: 'Windsurf', kind: 'IDE fork', status: 'ok' },
  { name: 'Cody', kind: 'extension', status: 'ok' },
  { name: 'Codeium', kind: 'extension', status: 'ok' },
  { name: 'Tabnine', kind: 'extension', status: 'ok' },
  { name: 'Continue', kind: 'extension', status: 'ok' },
  { name: 'Aider', kind: 'CLI agent', status: 'ok' },
  { name: 'Cline', kind: 'extension', status: 'ok' },
  { name: 'Devin', kind: 'browser', status: 'ok' },
  { name: 'Replit Agent', kind: 'browser', status: 'ok' },
  { name: 'Cluely', kind: 'overlay', status: 'ok' },
  { name: 'Ghost', kind: 'overlay', status: 'ok' },
  { name: 'UltraCode', kind: 'extension', status: 'ok' },
  { name: 'Prakrit AI', kind: 'browser', status: 'ok' },
  { name: 'Amazon Q', kind: 'extension', status: 'ok' },
  { name: '+ 23 more', kind: 'see registry', status: 'new' },
] as const;

export default function Position() {
  return (
    <section className="paper">
      <div className="wrap">
        <div className="section-head" style={{ maxWidth: '68ch' }}>
          <span className="eyebrow">Our position</span>
          <h2>
            Using AI isn&rsquo;t the problem.
            <br />
            Pretending you didn&rsquo;t is.
          </h2>
          <p>
            Good code is not defined by whether someone types every line by hand. Great engineers
            are defined by how they design, architect, decompose, and use the right tools to ship
            something that holds up under load.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--ink-2)', marginBottom: '22px' }}>
              In production, AI assistants are part of the ecosystem. Cursor, Claude Code, Copilot,
              Windsurf, Cody &mdash; they make good engineers faster and let teams focus on the parts
              that actually matter. We use them ourselves. So do your candidates.
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--ink-2)', marginBottom: '22px' }}>
              Interviews are different. The point of an assessment isn&rsquo;t to ban tools &mdash; it&rsquo;s
              to surface the human underneath them. Can they reason about a system? Choose the right
              abstraction? Debug under pressure? Tell you <em>why</em> they did what they did?
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--ink-2)' }}>
              So we don&rsquo;t block. We <strong>attribute</strong>. Every line of code in every session is
              tagged: human, AI, AI-modified-by-human, or pasted. You decide what&rsquo;s allowed for
              the role. We give you the full picture, line by line, and the AI debrief that proves
              they understand what they shipped.
            </p>
            <div
              style={{
                marginTop: '32px',
                padding: '20px 22px',
                borderLeft: '3px solid var(--copper)',
                background: 'color-mix(in oklab, var(--copper) 6%, transparent)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: '22px',
                  fontStyle: 'italic',
                  color: 'var(--ink)',
                  lineHeight: 1.4,
                }}
              >
                &ldquo;Don&rsquo;t test whether they used AI. Test whether they could have built it
                without.&rdquo;
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                color: 'var(--muted)',
                marginBottom: '6px',
                fontWeight: 500,
              }}
            >
              Detection coverage
            </div>
            <h3
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: '28px',
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: '8px',
              }}
            >
              Every AI coding assistant currently in the wild &mdash; detected.
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.5, marginBottom: '26px' }}>
              Identified by process signature, network fingerprint, IDE extension footprint,
              completion-API call patterns, and behavioral signature. Updated weekly as new tools
              ship.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {AI_TOOLS.map((tool) => (
                <div className="ai-tile" key={tool.name}>
                  <span className={`dot ${tool.status}`} />
                  <div className="nm">{tool.name}</div>
                  <div className="kd">{tool.kind}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '22px',
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
                fontSize: '13px',
                color: 'var(--muted)',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '99px',
                    background: 'var(--forest)',
                  }}
                />
                detected &amp; classified
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '99px',
                    background: 'var(--copper)',
                  }}
                />
                added this month
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
