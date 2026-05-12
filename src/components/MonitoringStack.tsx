const LAYERS = [
  {
    id: '01 · SYSTEM',
    title: 'System logs & events',
    desc: 'Process spawn, network egress, USB attach, clipboard transitions — the entire syscall surface, captured.',
  },
  {
    id: '02 · CAMERA',
    title: 'Camera & presence',
    desc: 'Continuous identity verification, gaze tracking, off-camera alerts, second-person detection.',
  },
  {
    id: '03 · SCREEN',
    title: 'Screen & share activity',
    desc: 'Full screen recording, secondary display detection, screen-share to external apps blocked or flagged.',
  },
  {
    id: '04 · BEHAVIOR',
    title: 'Behavior patterns',
    desc: "Keystroke cadence, paste-burst detection, focus drift, anomaly scoring against the candidate's baseline.",
  },
  {
    id: '05 · ACCESS',
    title: 'App access policies',
    desc: 'Allowlist only the apps the role requires — Cursor, VS Code, terminal. Everything else is sealed at the OS.',
  },
  {
    id: '06 · AI USAGE',
    title: 'AI tool attribution',
    desc: 'Every prompt, accept, reject — line-by-line. Human / AI-generated / AI-modified, with confidence intervals.',
  },
  {
    id: '07 · NETWORK',
    title: 'Network & egress',
    desc: 'DNS allowlists, exfil detection, packet-level audit of any external service the workspace touches.',
  },
  {
    id: '08 · AUDIT',
    title: 'Compliance & audit log',
    desc: 'Tamper-evident, hash-chained event log. SOC 2, ISO 27001, GDPR, EEOC — export-ready in one click.',
  },
];

export default function MonitoringStack() {
  return (
    <section className="dark">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The Monitoring Stack</span>
          <h2>Eight signal layers. One sealed session.</h2>
          <p>
            Web tracking is a surface. Proctored One operates at the OS, network, behavior, and
            code layers — so every keystroke is contextualized, every event is timestamped, and
            every session is replay-ready for audit.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'color-mix(in oklab, var(--paper) 14%, transparent)',
            border: '1px solid color-mix(in oklab, var(--paper) 14%, transparent)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {LAYERS.map((layer) => (
            <div key={layer.id} style={{ background: 'var(--ink)', padding: '28px' }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--amber)',
                  marginBottom: '14px',
                }}
              >
                {layer.id}
              </div>
              <h3 style={{ fontSize: '18px', color: 'var(--paper)', marginBottom: '8px' }}>
                {layer.title}
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: 'color-mix(in oklab, var(--paper) 65%, transparent)',
                  lineHeight: 1.5,
                }}
              >
                {layer.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
