const AGENTS = [
  { initials: 'CQ', color: '#1F4D3D', name: 'code-quality.agent', score: '8.8' },
  { initials: 'AR', color: '#B8632F', name: 'architecture.agent', score: '8.2' },
  { initials: 'TC', color: '#5C7261', name: 'test-coverage.agent', score: '7.6' },
  { initials: 'AP', color: '#D89A4E', name: 'ai-prompt.agent', score: '9.1' },
  { initials: 'EH', color: '#A4243B', name: 'error-handling.agent', score: '8.0' },
  { initials: 'SE', color: '#163528', name: 'security.agent', score: '7.9' },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export default function Features() {
  return (
    <section className="paper">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">What you get</span>
          <h2>Not just a score. A complete picture of how your candidate engineers.</h2>
        </div>

        <div className="features-grid">
          {/* Big card: Multi-agent scoring */}
          <div className="feature big">
            <h3>Multi-agent scoring</h3>
            <p>10+ independent AI agents evaluate against your custom rubric. No single interviewer&apos;s bad day skews the result.</p>
            <div className="visual agent-stack">
              {AGENTS.map((a) => (
                <div className="agent-row" key={a.name}>
                  <span className="av" style={{ background: a.color }}>{a.initials}</span>
                  {a.name}
                  <span style={{ marginLeft: 'auto', color: 'var(--muted)' }}>{a.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Small card 1 */}
          <div className="feature">
            <h3>Your codebase, their skills</h3>
            <p>Candidates build on your actual repo. No toy problems, no sandboxes. Real complexity, real signal.</p>
          </div>

          {/* Small card 2 */}
          <div className="feature">
            <h3>AI as a tool, not a crutch</h3>
            <p>Full Claude Code access, just like the job. Every prompt, suggestion, and decision is captured.</p>
          </div>

          {/* Wide card: Line-by-line attribution */}
          <div className="feature wide">
            <h3>Line-by-line attribution</h3>
            <p>Every line classified: human-written, AI-generated, or AI-modified.</p>
            <div className="visual attr-code">
              <div>
                <span style={{ color: 'var(--muted)' }}>15</span>&nbsp;&nbsp;
                <span className="human">export function retryInvoice(id: string, attempt = 0) {'{'}</span>
              </div>
              <div>
                <span style={{ color: 'var(--muted)' }}>16</span>&nbsp;&nbsp;
                <span className="ai">&nbsp;&nbsp;if (attempt &gt;= MAX_RETRIES) throw new RetryExhausted(id);</span>
              </div>
              <div>
                <span style={{ color: 'var(--muted)' }}>17</span>&nbsp;&nbsp;
                <span className="human">&nbsp;&nbsp;const delay = backoffMs(attempt);</span>
              </div>
              <div>
                <span style={{ color: 'var(--muted)' }}>18</span>&nbsp;&nbsp;
                <span className="ai">&nbsp;&nbsp;await sleep(delay);</span>
              </div>
              <div>
                <span style={{ color: 'var(--muted)' }}>19</span>&nbsp;&nbsp;
                <span className="human">&nbsp;&nbsp;return schedule(id, attempt + 1);</span>
              </div>
              <div>
                <span style={{ color: 'var(--muted)' }}>20</span>&nbsp;&nbsp;
                <span className="human">{'}'}</span>
              </div>
              <div style={{ display: 'flex', gap: '18px', marginTop: '10px', fontFamily: "'Geist',sans-serif", fontSize: '11px', color: 'var(--muted)' }}>
                <span>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      background: 'color-mix(in oklab, var(--forest) 18%, transparent)',
                      borderRadius: '2px',
                      verticalAlign: 'middle',
                    }}
                  />{' '}
                  Human
                </span>
                <span>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      background: 'color-mix(in oklab, var(--copper) 22%, transparent)',
                      borderRadius: '2px',
                      verticalAlign: 'middle',
                    }}
                  />{' '}
                  AI generated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
