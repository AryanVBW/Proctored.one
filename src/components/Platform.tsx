function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function Peek1() {
  return (
    <div className="peek peek1">
      <div className="head">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span style={{ fontSize: '11px', color: 'var(--muted)', marginLeft: '8px' }}>
          New Assessment · Senior Full-Stack
        </span>
      </div>
      <div className="body">
        <div className="field">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
          </svg>
          <span style={{ opacity: 0.6 }}>Repository</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', marginLeft: 'auto' }}>
            acme/billing-service
          </span>
        </div>
        <div className="field">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="16" rx="2" />
          </svg>
          <span style={{ opacity: 0.6 }}>Branch</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', marginLeft: 'auto' }}>
            main
          </span>
        </div>
        <div className="rubric">
          <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
            Review agents
          </div>
          {['Code quality & idioms', 'Test coverage', 'Architecture clarity', 'AI prompt discipline', 'Error handling depth'].map((item) => (
            <div className="rubric-row" key={item}>
              <span className="check">✓</span> {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Peek2() {
  return (
    <div className="peek peek2">
      <div className="head">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span style={{ fontSize: '11px', color: 'var(--muted)', marginLeft: '8px' }}>
          candidate.proctored.one / IDE
        </span>
      </div>
      <div className="body">
        <div className="sidebar">
          <div className="file">src/</div>
          <div className="file" style={{ paddingLeft: '14px' }}>billing.ts</div>
          <div className="file active" style={{ paddingLeft: '14px' }}>invoice.ts</div>
          <div className="file" style={{ paddingLeft: '14px' }}>retry.ts</div>
          <div className="file">tests/</div>
        </div>
        <div className="editor">
          <div><span className="line-num">12</span><span className="kw">export function</span> retryInvoice(</div>
          <div><span className="line-num">13</span>&nbsp;&nbsp;id: <span className="kw">string</span>,</div>
          <div><span className="line-num">14</span>&nbsp;&nbsp;attempt = <span className="str">0</span></div>
          <div><span className="line-num">15</span>) {'{'}</div>
          <div><span className="line-num">16</span>&nbsp;&nbsp;<span className="com">// exponential backoff</span></div>
          <div><span className="line-num">17</span>&nbsp;&nbsp;<span className="kw">const</span> delay = <span className="str">2</span> ** attempt;</div>
          <div><span className="line-num">18</span>&nbsp;&nbsp;<span className="kw">return</span> schedule(</div>
          <div><span className="line-num">19</span>&nbsp;&nbsp;&nbsp;&nbsp;id, delay</div>
          <div><span className="line-num">20</span>&nbsp;&nbsp;);</div>
        </div>
        <div className="chat">
          <div style={{ fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '8px' }}>
            Claude Code
          </div>
          <div className="msg">add a max retry cap of 5</div>
          <div className="msg ai">Adding guard for attempt &gt;= 5 with a fail-fast log line…</div>
          <div className="msg">don&apos;t fail silently — bubble up</div>
        </div>
      </div>
    </div>
  );
}

function Peek3() {
  const scores = [
    { label: 'Code quality', pct: 88, score: '8.8' },
    { label: 'Architecture', pct: 82, score: '8.2' },
    { label: 'Test coverage', pct: 76, score: '7.6' },
    { label: 'AI prompt discipline', pct: 91, score: '9.1' },
    { label: 'Error handling', pct: 80, score: '8.0' },
  ];
  return (
    <div className="peek peek3">
      <div className="head">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span style={{ fontSize: '11px', color: 'var(--muted)', marginLeft: '8px' }}>
          Maya Chen · Senior Full-Stack · Submitted 2h ago
        </span>
      </div>
      <div className="body">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>Overall</div>
            <div style={{ fontFamily: "'Newsreader', serif", fontSize: '42px', lineHeight: 1 }}>
              8.4<span style={{ color: 'var(--muted)', fontSize: '18px' }}> / 10</span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>Attribution</div>
            <div style={{ fontSize: '13px' }}>
              <span style={{ color: 'var(--forest)' }}>●</span> 61% human ·{' '}
              <span style={{ color: 'var(--copper)' }}>●</span> 39% AI
            </div>
          </div>
        </div>
        {scores.map((s) => (
          <div className="score-row" key={s.label}>
            <span className="agent">{s.label}</span>
            <span className="bar"><i style={{ width: `${s.pct}%` }} /></span>
            <span className="score">{s.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Platform() {
  return (
    <section id="platform" className="paper">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The Platform</span>
          <h2>See exactly how every candidate builds.</h2>
        </div>

        {/* Step 1 */}
        <div className="step">
          <div className="copy">
            <span className="eyebrow">01 — Create Assessment</span>
            <h3>Connect your repo. Define your rubric. Send a link.</h3>
            <p>
              Link a GitHub repo or pick a pre-built template. Define custom evaluation criteria
              with 10+ AI review agents. Invite candidates with a single link — no scheduling, no
              setup.
            </p>
          </div>
          <Peek1 />
        </div>

        {/* Step 2 */}
        <div className="step">
          <div className="copy">
            <span className="eyebrow">02 — Candidate Experience</span>
            <h3>Candidates build on your actual codebase.</h3>
            <p>
              A browser-based IDE with Claude Code on your repo — no local setup. They build,
              debug, and refactor real code, exactly how they&apos;d work on the job.
            </p>
          </div>
          <Peek2 />
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="copy">
            <span className="eyebrow">03 — Review Results</span>
            <h3>Know exactly how they built it.</h3>
            <p>
              Multiple AI agents score every submission against your criteria. See which code was
              human-written vs AI-generated, replay the full session, and verify understanding
              through AI-checked debrief questions.
            </p>
            <div style={{ marginTop: '24px' }}>
              <a className="btn btn-primary" href="/control-panel">
                Open a sample report →
              </a>
            </div>
          </div>
          <Peek3 />
        </div>
      </div>
    </section>
  );
}
