function SmallCheck() {
  return (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

const PEEK1_AGENTS = [
  'Code Quality', 'Architecture', 'Test Coverage',
  'AI Prompt Discipline', 'Error Handling',
  'Security', 'Performance', 'Readability',
  'Best Practices', 'Documentation',
];

function Peek1() {
  return (
    <div className="peek peek1-ca">
      {/* Browser chrome */}
      <div className="peek1-ca-chrome">
        <span className="dot" style={{ background: '#FF6057' }} />
        <span className="dot" style={{ background: '#FEBC2E' }} />
        <span className="dot" style={{ background: '#28C840' }} />
        <span className="peek1-ca-url">proctored.one / create-assessment</span>
      </div>

      {/* App shell */}
      <div className="peek1-ca-shell">

        {/* Sidebar */}
        <div className="peek1-ca-sidebar">
          {/* Logo — exact LogoMark SVG */}
          <div className="peek1-ca-logo">
            <svg width="14" height="14" viewBox="0 0 32 32" fill="none" style={{ color: 'var(--ink)', flexShrink: 0 }}>
              <path
                d="M16 2.2 L27.8 9 L27.8 23 L16 29.8 L4.2 23 L4.2 9 Z"
                stroke="currentColor" strokeWidth="1.6" fill="none"
              />
              <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.4" fill="none" />
              <circle cx="16" cy="16" r="3.6" stroke="currentColor" strokeWidth="1.2" fill="none" />
              <circle cx="16" cy="16" r="1.5" fill="#B8632F" />
              <line x1="16" y1="5.5" x2="16" y2="8.8" stroke="currentColor" strokeWidth="1.4" />
              <line x1="16" y1="23.2" x2="16" y2="26.5" stroke="currentColor" strokeWidth="1.4" />
              <line x1="5.5" y1="16" x2="8.8" y2="16" stroke="currentColor" strokeWidth="1.4" />
              <line x1="23.2" y1="16" x2="26.5" y2="16" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <span style={{ fontSize: '9px', fontFamily: "'Newsreader', serif", color: 'var(--ink)', fontWeight: 500, letterSpacing: '-0.01em' }}>Proctored One</span>
          </div>

          {/* Nav sections */}
          <div style={{ padding: '6px 0' }}>
            <div className="peek1-ca-navlabel">Assessments</div>
            {['All Assessments', 'Drafts', 'Templates', 'Question Bank'].map((item) => (
              <div key={item} className="peek1-ca-navitem">
                <span className="peek1-ca-navdot" />
                <span>{item}</span>
                {item === 'Drafts' && <span className="peek1-ca-navbadge">3</span>}
              </div>
            ))}
          </div>
          <div style={{ padding: '4px 0' }}>
            <div className="peek1-ca-navlabel">Analytics</div>
            {['Overview', 'Reports', 'AI Agent Performance'].map((item) => (
              <div key={item} className="peek1-ca-navitem">
                <span className="peek1-ca-navdot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: '4px 0' }}>
            <div className="peek1-ca-navlabel">Settings</div>
            {['Team', 'Integrations', 'Billing'].map((item) => (
              <div key={item} className="peek1-ca-navitem">
                <span className="peek1-ca-navdot" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Plan block */}
          <div className="peek1-ca-plan">
            <div style={{ fontSize: '7px', fontWeight: 600, color: 'var(--ink)', marginBottom: '2px' }}>Enterprise Plan</div>
            <div style={{ fontSize: '6px', color: 'var(--muted)' }}>15 assessments remaining</div>
            <div className="peek1-ca-planbar"><div className="peek1-ca-planfill" /></div>
          </div>

          {/* User row */}
          <div className="peek1-ca-user">
            <div className="peek1-ca-avatar">AM</div>
            <div>
              <div style={{ fontSize: '6.5px', fontWeight: 500, color: 'var(--ink)' }}>Alex Morgan</div>
              <div style={{ fontSize: '5.5px', color: 'var(--muted)' }}>alex@acmecorp.com</div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="peek1-ca-main">

          {/* Topbar */}
          <div className="peek1-ca-topbar">
            <span style={{ fontFamily: "'Newsreader', serif", fontSize: '10px', fontWeight: 500, color: 'var(--ink)' }}>New Assessment</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ fontSize: '6px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="var(--good)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                Autosaved
              </span>
              <div className="peek1-ca-btn-ghost">Preview</div>
              <div className="peek1-ca-btn-primary">Create Assessment</div>
            </div>
          </div>

          {/* Steps */}
          <div className="peek1-ca-steps">
            {['Setup', 'Rubric', 'Agents', 'Invite'].map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <div className={`peek1-ca-step-circle ${i === 0 ? 'active' : ''}`}>{i + 1}</div>
                <span style={{ fontSize: '6px', color: i === 0 ? 'var(--ink)' : 'var(--muted)', fontWeight: i === 0 ? 500 : 400 }}>{s}</span>
                {i < 3 && <div className="peek1-ca-step-line" />}
              </div>
            ))}
          </div>

          {/* Scrollable content */}
          <div className="peek1-ca-content">

            {/* Repository card */}
            <div className="peek1-ca-card">
              <div className="peek1-ca-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div className="peek1-ca-card-icon">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '7.5px', fontFamily: "'Newsreader', serif", fontWeight: 500, color: 'var(--ink)' }}>Repository</div>
                    <div style={{ fontSize: '5.5px', color: 'var(--muted)' }}>Connect a GitHub repository</div>
                  </div>
                </div>
              </div>
              {/* Connected repo row */}
              <div className="peek1-ca-repo-row">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--ink)">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span style={{ fontSize: '6.5px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--ink-2)', flex: 1 }}>github.com/acme/billing-service</span>
                <div className="peek1-ca-mini-btn">Change Repository</div>
              </div>
              {/* Meta fields */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '5px' }}>
                {[['Branch', 'main'], ['Path (optional)', '/'], ['Visibility', '🔒 Private']].map(([label, val]) => (
                  <div key={label}>
                    <div style={{ fontSize: '5px', color: 'var(--muted)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '.04em' }}>{label}</div>
                    <div className="peek1-ca-field-val">{val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Evaluation Rubric card */}
            <div className="peek1-ca-card">
              <div className="peek1-ca-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div className="peek1-ca-card-icon">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '7.5px', fontFamily: "'Newsreader', serif", fontWeight: 500, color: 'var(--ink)' }}>Evaluation Rubric</div>
                    <div style={{ fontSize: '5.5px', color: 'var(--muted)' }}>Define custom evaluation criteria</div>
                  </div>
                </div>
                <div className="peek1-ca-mini-btn">Edit Rubric</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {['Code Quality', 'Architecture', 'Test Coverage', 'AI Prompt Discipline', 'Error Handling', '+ 5 more'].map((tag) => (
                  <span key={tag} className={`peek1-ca-tag ${tag.startsWith('+') ? 'peek1-ca-tag-more' : ''}`}>{tag}</span>
                ))}
              </div>
            </div>

            {/* AI Review Agents card */}
            <div className="peek1-ca-card">
              <div className="peek1-ca-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div className="peek1-ca-card-icon">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 1 0-16 0" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '7.5px', fontFamily: "'Newsreader', serif", fontWeight: 500, color: 'var(--ink)' }}>AI Review Agents <span style={{ fontFamily: "'Geist',sans-serif", color: 'var(--muted)', fontWeight: 400 }}>(10+)</span></div>
                    <div style={{ fontSize: '5.5px', color: 'var(--muted)' }}>Select AI agents that will evaluate</div>
                  </div>
                </div>
                <div className="peek1-ca-mini-btn">Manage Agents</div>
              </div>
              <div className="peek1-ca-agents-grid">
                {PEEK1_AGENTS.map((name) => (
                  <div key={name} className="peek1-ca-agent-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '3px' }}>
                      <div className="peek1-ca-agent-avatar">
                        <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 1 0-16 0" />
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontSize: '6px', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.2 }}>{name}</div>
                        <div style={{ fontSize: '5px', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>Agent</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <div className="peek1-ca-checkbox">
                        <SmallCheck />
                      </div>
                    </div>
                  </div>
                ))}
                <div className="peek1-ca-add-agent">+ Add Agent</div>
              </div>
            </div>

            {/* Invite Candidates card */}
            <div className="peek1-ca-card">
              <div className="peek1-ca-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div className="peek1-ca-card-icon">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '7.5px', fontFamily: "'Newsreader', serif", fontWeight: 500, color: 'var(--ink)' }}>Invite Candidates</div>
                    <div style={{ fontSize: '5.5px', color: 'var(--muted)' }}>Share the assessment link</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '5px' }}>
                <div className="peek1-ca-link-box">https://proctored.one/assessments/abc123def456</div>
                <div className="peek1-ca-btn-primary" style={{ fontSize: '6px', padding: '3px 7px', borderRadius: '4px' }}>Copy Link</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '5.5px', color: 'var(--muted)' }}>
                <span>🔒 Secure link</span><span style={{ color: 'var(--line-2)' }}>·</span>
                <span>No login required</span><span style={{ color: 'var(--line-2)' }}>·</span>
                <span>Expires in 30 days</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

const IDE_FILES = [
  { name: 'src', indent: 0, folder: true, open: true },
  { name: 'controllers', indent: 1, folder: true, open: true },
  { name: 'invoice.controller.ts', indent: 2, folder: false },
  { name: 'payment.controller.ts', indent: 2, folder: false },
  { name: 'services', indent: 1, folder: true, open: true },
  { name: 'invoice.service.ts', indent: 2, folder: false, active: true },
  { name: 'payment.service.ts', indent: 2, folder: false },
  { name: 'models', indent: 1, folder: true, open: true },
  { name: 'invoice.model.ts', indent: 2, folder: false },
  { name: 'payment.model.ts', indent: 2, folder: false },
  { name: 'utils', indent: 1, folder: true, open: true },
  { name: 'logger.ts', indent: 2, folder: false },
  { name: 'validation.ts', indent: 2, folder: false },
  { name: 'routes', indent: 1, folder: true, open: true },
  { name: 'invoice.routes.ts', indent: 2, folder: false },
  { name: 'payment.routes.ts', indent: 2, folder: false },
];

const CODE_LINES = [
  { n: 1,  parts: [{ t: 'kw', v: 'import' }, { t: 'txt', v: " { Payment, Invoice } from '../models';" }] },
  { n: 2,  parts: [{ t: 'kw', v: 'import' }, { t: 'txt', v: " { Logger } from '../utils/logger';" }] },
  { n: 3,  parts: [] },
  { n: 4,  parts: [{ t: 'kw', v: 'const' }, { t: 'txt', v: ' logger = ' }, { t: 'kw', v: 'new' }, { t: 'txt', v: " Logger(" }, { t: 'str', v: "'InvoiceService'" }, { t: 'txt', v: ')' }] },
  { n: 5,  parts: [] },
  { n: 6,  parts: [{ t: 'kw', v: 'export class' }, { t: 'txt', v: ' InvoiceService {' }] },
  { n: 7,  parts: [{ t: 'txt', v: '  ' }, { t: 'kw', v: 'async' }, { t: 'txt', v: ' retryPayment(invoiceId: ' }, { t: 'kw', v: 'string' }, { t: 'txt', v: ') {' }] },
  { n: 8,  parts: [{ t: 'txt', v: '    ' }, { t: 'kw', v: 'const' }, { t: 'txt', v: ' invoice = ' }, { t: 'kw', v: 'await' }, { t: 'txt', v: ' Invoice.findById(invoiceId);' }] },
  { n: 9,  parts: [{ t: 'txt', v: '    ' }, { t: 'kw', v: 'if' }, { t: 'txt', v: ' (!invoice) {' }] },
  { n: 10, parts: [{ t: 'txt', v: '      ' }, { t: 'kw', v: 'throw new' }, { t: 'txt', v: " Error(" }, { t: 'str', v: "'Invoice not found'" }, { t: 'txt', v: ');' }] },
  { n: 11, parts: [{ t: 'txt', v: '    }' }] },
  { n: 12, parts: [] },
  { n: 13, parts: [{ t: 'txt', v: '    ' }, { t: 'kw', v: 'if' }, { t: 'txt', v: " (invoice.status === " }, { t: 'str', v: "'paid'" }, { t: 'txt', v: ') {' }] },
  { n: 14, parts: [{ t: 'txt', v: '      ' }, { t: 'kw', v: 'return' }, { t: 'txt', v: ' invoice;' }] },
  { n: 15, parts: [{ t: 'txt', v: '    }' }] },
  { n: 16, parts: [] },
  { n: 17, parts: [{ t: 'txt', v: '    ' }, { t: 'kw', v: 'try' }, { t: 'txt', v: ' {' }] },
  { n: 18, parts: [{ t: 'txt', v: '      ' }, { t: 'kw', v: 'const' }, { t: 'txt', v: ' payment = ' }, { t: 'kw', v: 'await' }, { t: 'txt', v: ' Payment.process(' }] },
  { n: 19, parts: [{ t: 'txt', v: '        invoice.amount, invoice.customerId);' }] },
  { n: 20, parts: [{ t: 'txt', v: "      invoice.status = " }, { t: 'str', v: "'paid'" }, { t: 'txt', v: ';' }] },
  { n: 21, parts: [{ t: 'txt', v: '      invoice.paidAt = ' }, { t: 'kw', v: 'new' }, { t: 'txt', v: ' Date();' }] },
  { n: 22, parts: [{ t: 'txt', v: '      invoice.paymentId = payment.id;' }] },
  { n: 23, parts: [] },
  { n: 24, parts: [{ t: 'txt', v: '      ' }, { t: 'kw', v: 'await' }, { t: 'txt', v: ' invoice.save();' }] },
  { n: 25, parts: [{ t: 'txt', v: '      logger.info(' }, { t: 'str', v: '`Payment retried for ${invoiceId}`' }, { t: 'txt', v: ');' }] },
  { n: 26, parts: [{ t: 'txt', v: '      ' }, { t: 'kw', v: 'return' }, { t: 'txt', v: ' invoice;' }] },
  { n: 27, parts: [{ t: 'txt', v: '    } ' }, { t: 'kw', v: 'catch' }, { t: 'txt', v: ' (error) {' }] },
  { n: 28, parts: [{ t: 'txt', v: '      logger.error(' }, { t: 'str', v: "'Payment retry failed'" }, { t: 'txt', v: ', error);' }] },
  { n: 29, parts: [{ t: 'txt', v: '      ' }, { t: 'kw', v: 'throw new' }, { t: 'txt', v: " Error(" }, { t: 'str', v: "'Payment retry failed.'" }, { t: 'txt', v: ');' }] },
  { n: 30, parts: [{ t: 'txt', v: '    }' }] },
  { n: 31, parts: [{ t: 'txt', v: '  }' }] },
  { n: 32, parts: [{ t: 'txt', v: '}' }] },
];

const DIFF_LINES = [
  { t: 'ctx', v: '17  try {' },
  { t: 'add', v: '18 +  const payment = await Payment.process(invoice.amount,' },
  { t: 'add', v: '19 +  let lastError: Error | null = null;' },
  { t: 'add', v: '20 +  const maxRetries = 3;' },
  { t: 'add', v: '21 +  const delay = 1000; // 1 second' },
  { t: 'ctx', v: '22' },
  { t: 'add', v: '23 +  for (let attempt = 1; attempt <= maxRetries; attempt++)' },
  { t: 'add', v: '24 +    const payment = await Payment.process(invoice.amount,' },
  { t: 'add', v: '25 +    break;' },
  { t: 'add', v: '26 +  } catch (error) {' },
  { t: 'add', v: '27 +    lastError = error as Error;' },
];

function Peek2() {
  return (
    <div className="p2-shell">
      {/* ── Window chrome ── */}
      <div className="p2-chrome">
        <span className="p2-dot" style={{ background: '#FF6057' }} />
        <span className="p2-dot" style={{ background: '#FEBC2E' }} />
        <span className="p2-dot" style={{ background: '#28C840' }} />
        <div className="p2-chrome-center">
          <svg width="12" height="12" viewBox="0 0 32 32" fill="none" style={{ color: 'var(--ink)', flexShrink: 0 }}>
            <path d="M16 2.2 L27.8 9 L27.8 23 L16 29.8 L4.2 23 L4.2 9 Z" stroke="currentColor" strokeWidth="1.8" fill="none" />
            <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="16" cy="16" r="1.6" fill="#B8632F" />
          </svg>
          <span className="p2-brand">PROCTORED ONE</span>
        </div>
        <div className="p2-topbar-right">
          <div className="p2-repo-crumb">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>acme / billing-service</span>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 3h12l4 6-10 13L2 9z"/></svg>
            <span className="p2-branch">main</span>
          </div>
          <div className="p2-timer">
            <span className="p2-timer-val">02:48:31</span>
            <span className="p2-timer-lbl">TIME REMAINING</span>
          </div>
          <div className="p2-topbtns">
            <button className="p2-tbtn-ghost">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Instructions
            </button>
            <button className="p2-tbtn-ghost">Environment</button>
            <button className="p2-tbtn-primary">Submit Solution ▾</button>
          </div>
        </div>
      </div>

      {/* ── App body ── */}
      <div className="p2-body">

        {/* Activity bar */}
        <div className="p2-actbar">
          {['M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z M9 3v18M3 9h18',
            'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6',
            'M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-4M14 3h4l2 2v4M14 3v6h6M10 13h4M10 17h4',
            'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77',
          ].map((d, i) => (
            <div key={i} className={`p2-acticon ${i === 0 ? 'active' : ''}`}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                {d.split('M').filter(Boolean).map((seg, j) => <path key={j} d={`M${seg}`} />)}
              </svg>
            </div>
          ))}
          <div className="p2-actbar-spacer" />
          <div className="p2-acticon p2-acticon-user">AM</div>
        </div>

        {/* File explorer */}
        <div className="p2-explorer">
          <div className="p2-exp-header">EXPLORER</div>
          <div className="p2-exp-section">BILLING-SERVICE</div>
          {IDE_FILES.map((f) => (
            <div
              key={f.name}
              className={`p2-file ${f.active ? 'active' : ''}`}
              style={{ paddingLeft: `${8 + f.indent * 10}px` }}
            >
              {f.folder ? (
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {f.open ? <polyline points="6 9 12 15 18 9"/> : <polyline points="9 18 15 12 9 6"/>}
                </svg>
              ) : (
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                </svg>
              )}
              <span>{f.name}</span>
            </div>
          ))}
        </div>

        {/* Editor + bottom terminal */}
        <div className="p2-editor-col">
          {/* Tab bar */}
          <div className="p2-tabbar">
            <div className="p2-tab active">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              </svg>
              invoice.service.ts
              <span className="p2-tab-close">×</span>
            </div>
          </div>
          {/* Breadcrumb */}
          <div className="p2-breadcrumb">
            <span>src</span><span className="p2-bc-sep">›</span>
            <span>services</span><span className="p2-bc-sep">›</span>
            <span>invoice.service.ts</span><span className="p2-bc-sep">›</span>
            <span className="p2-bc-sym">⬡ InvoiceService</span><span className="p2-bc-sep">›</span>
            <span className="p2-bc-sym">◆ retryPayment</span>
          </div>
          {/* Code */}
          <div className="p2-code">
            {CODE_LINES.map((line) => (
              <div key={line.n} className="p2-line">
                <span className="p2-ln">{line.n}</span>
                <span className="p2-lc">
                  {line.parts.map((p, i) => (
                    <span key={i} className={p.t === 'kw' ? 'p2-kw' : p.t === 'str' ? 'p2-str' : p.t === 'com' ? 'p2-com' : ''}>
                      {p.v}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
          {/* Terminal panel */}
          <div className="p2-terminal">
            <div className="p2-term-tabs">
              {['TERMINAL','PROBLEMS','OUTPUT','DEBUG CONSOLE'].map((t, i) => (
                <span key={t} className={`p2-term-tab ${i === 0 ? 'active' : ''}`}>{t}{t === 'PROBLEMS' && <span className="p2-prob-badge">2</span>}</span>
              ))}
              <div className="p2-term-actions">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </div>
              <span className="p2-term-shell">bash ∨</span>
            </div>
            <div className="p2-term-body">
              <div><span className="p2-prompt">$</span> npm run dev</div>
              <div className="p2-term-dim">&gt; billing-service@1.0.0 dev</div>
              <div className="p2-term-dim">&gt; ts-node-dev --respawn src/index.ts</div>
              <div className="p2-term-dim">[INFO] 10:24:15 ts-node-dev ver. 2.0.0 (using ts-node 10.9.1, typescript ver. 5.3.3)</div>
              <div className="p2-term-dim">[INFO] 10:24:16 Starting server on http://localhost:3000</div>
              <div><span className="p2-prompt">▌</span></div>
            </div>
          </div>
        </div>

        {/* Claude Code panel */}
        <div className="p2-claude">
          <div className="p2-claude-header">
            <span className="p2-claude-title">CLAUDE CODE</span>
            <span className="p2-beta-pill">BETA</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
            </div>
          </div>
          <div className="p2-claude-body">
            {/* User message */}
            <div className="p2-claude-bubble p2-claude-user">
              Help me implement exponential backoff for payment retry to handle transient failures.
            </div>
            {/* AI response */}
            <div className="p2-claude-resp">
              <p>I&apos;ll help you implement exponential backoff for payment retries. Here&apos;s how we can update the retry logic:</p>
            </div>
            {/* Diff block */}
            <div className="p2-diff-block">
              <div className="p2-diff-header">
                <span>Suggested changes</span>
                <span className="p2-diff-lang">TS</span>
              </div>
              {DIFF_LINES.map((l, i) => (
                <div key={i} className={`p2-diff-line p2-diff-${l.t}`}>{l.v}</div>
              ))}
              <div className="p2-diff-footer">
                invoice.service.ts &nbsp;&nbsp; <span className="p2-diff-more">View full diff →</span>
              </div>
            </div>
            {/* Follow-up text */}
            <div className="p2-claude-resp">
              <p>This implements exponential backoff with retries:</p>
              <ul>
                <li>1st retry: 1 second delay</li>
                <li>2nd retry: 2 seconds delay</li>
                <li>3rd retry: 4 seconds delay</li>
              </ul>
              <p>Let me know if you&apos;d like me to apply these changes.</p>
            </div>
            <div className="p2-claude-category">Using exponential backoff best practices ∨</div>
          </div>
          {/* Input */}
          <div className="p2-claude-input">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
            <span className="p2-input-placeholder">Ask Claude to help…</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 'auto' }}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </div>
        </div>
      </div>

      {/* ── Status bar ── */}
      <div className="p2-statusbar">
        <div className="p2-status-left">
          <span className="p2-status-branch">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>
            </svg>
            main
          </span>
          <span className="p2-status-item">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            ○ 2
          </span>
          <span className="p2-status-item">◇ 0</span>
        </div>
        <div className="p2-status-right">
          <span>Ln 13, Col 1</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
          <span>LF</span>
          <span>TypeScript</span>
        </div>
      </div>
    </div>
  );
}

function Peek3() {
  // Timeline data: [human%, ai%] at 5 time points across 2h48m
  const tlHuman = [
    [0,0],[18,28],[30,32],[46,24],[62,18],[78,22],[100,30]
  ];
  // Build SVG polygon points for stacked area chart (top=human, bottom=ai)
  // viewBox 0 0 100 36, y=0 is top (100%), y=36 is bottom (0%)
  const hPts = tlHuman.map(([x,y]) => `${x},${36 - y * 0.36}`).join(' ');
  const aiOffsets = [12, 14, 16, 14, 12, 14, 16]; // ai% at each x
  const aiPts = tlHuman.map(([x], i) => `${x},${36 - aiOffsets[i] * 0.36}`).join(' ');
  
  const rubric = [
    { name: 'Code Quality',       pct: 88, score: '8.8', w: '20%', ws: '1.76' },
    { name: 'Architecture',       pct: 82, score: '8.2', w: '20%', ws: '1.64' },
    { name: 'Test Coverage',      pct: 76, score: '7.6', w: '20%', ws: '1.52' },
    { name: 'AI Prompt Disc.',    pct: 91, score: '9.1', w: '15%', ws: '1.37' },
    { name: 'Error Handling',     pct: 80, score: '8.0', w: '15%', ws: '1.20' },
    { name: 'Best Practices',     pct: 83, score: '8.3', w: '10%', ws: '0.83' },
  ];
  
  const agents = [
    { name: 'Code Quality', score: '8.8', desc: 'Readable, well-named code.' },
    { name: 'Architecture', score: '8.2', desc: 'Clean service/layer separation.' },
    { name: 'Test Coverage', score: '7.6', desc: 'Good coverage, some gaps.' },
    { name: 'AI Prompt Discipline', score: '9.1', desc: 'Minimal AI over-reliance.' },
    { name: 'Error Handling', score: '8.0', desc: 'Meaningful, consistent errors.' },
  ];

  return (
    <div className="p3-shell">
      <div className="p3-chrome">
        <span className="p3-dot" style={{ background: '#FF6057' }} />
        <span className="p3-dot" style={{ background: '#FEBC2E' }} />
        <span className="p3-dot" style={{ background: '#28C840' }} />
      </div>
      <div className="p3-body">
        {/* Sidebar */}
        <div className="p3-sidebar">
          <div className="p3-logo">
            <svg width="13" height="13" viewBox="0 0 32 32" fill="none" style={{ color: 'var(--ink)', flexShrink: 0 }}>
              <path d="M16 2.2 L27.8 9 L27.8 23 L16 29.8 L4.2 23 L4.2 9 Z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
              <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="16" cy="16" r="1.6" fill="currentColor"/>
            </svg>
            <span className="p3-brand">PROCTORED ONE</span>
          </div>
          <div className="p3-nav-group">
            <div className="p3-nav-lbl">ASSESSMENT</div>
            {[
              { icon: 'M3 3h18v18H3zM3 9h18M9 21V9', label: 'Overview' },
              { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', label: 'Candidates' },
              { icon: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z', label: 'Submissions', badge: '24', active: true },
              { icon: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01', label: 'Rubric' },
              { icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', label: 'Settings' },
            ].map(n => (
              <div key={n.label} className={`p3-nav-item${n.active ? ' active' : ''}`}>
                <svg className="p3-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {n.icon.split('M').filter(Boolean).map((seg, i) => <path key={i} d={`M${seg}`}/>)}
                </svg>
                {n.label}
                {n.badge && <span className="p3-badge">{n.badge}</span>}
              </div>
            ))}
          </div>
          <div className="p3-nav-group">
            <div className="p3-nav-lbl">ANALYTICS</div>
            {[
              { icon: 'M18 20V10M12 20V4M6 20v-6', label: 'Results' },
              { icon: 'M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0V4a2 2 0 0 1 2-2z M4 14h16v6H4z', label: 'AI Agents' },
              { icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', label: 'Benchmarks' },
            ].map(n => (
              <div key={n.label} className="p3-nav-item">
                <svg className="p3-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {n.icon.split('M').filter(Boolean).map((seg, i) => <path key={i} d={`M${seg}`}/>)}
                </svg>
                {n.label}
              </div>
            ))}
          </div>
          <div className="p3-sidebar-bottom">
            <div className="p3-plan">
              <div className="p3-plan-title">Enterprise Plan</div>
              <div className="p3-plan-desc">15 assessments remaining · Renews in 12 days</div>
              <div className="p3-plan-bar"><div className="p3-plan-fill" /></div>
            </div>
            <div className="p3-user">
              <div className="p3-user-av">AM</div>
              <div><div className="p3-user-name">Alex Morgan</div><div className="p3-user-email">alex@acmecorp.com</div></div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="p3-main">
          {/* Header */}
          <div className="p3-header">
            <div className="p3-bc">
              Assessments <span className="p3-bc-sep">›</span> Senior Full-Stack <span className="p3-bc-sep">›</span> <span className="p3-bc-strong">Submission #78291</span>
            </div>
            <div className="p3-h-actions">
              <button className="p3-btn-ghost">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                Share
              </button>
              <button className="p3-btn-primary">Open Full Report</button>
            </div>
          </div>

          <div className="p3-dash">
            {/* ── Overview Strip ── */}
            <div className="p3-card">
              <div className="p3-ov-strip">
                {/* Candidate */}
                <div className="p3-ovs-cand">
                  <div className="p3-ov-av">MC</div>
                  <div>
                    <div className="p3-ov-name">Maya Chen</div>
                    <div className="p3-ov-email">maya.chen@example.com</div>
                    <div className="p3-ov-meta" style={{marginTop:'4px'}}>
                      <span className="p3-ov-tag">⏱ 2h 48m</span>
                      <span className="p3-ov-tag">📅 2h ago</span>
                    </div>
                  </div>
                </div>
                {/* Score */}
                <div className="p3-ovs-stat">
                  <div className="p3-s-lbl">Overall Score</div>
                  <div className="p3-s-val">8.4<span> / 10</span></div>
                  <span className="p3-hire-badge">Strong Hire</span>
                </div>
                {/* SVG Donut */}
                <div className="p3-ovs-stat">
                  <div className="p3-s-lbl">Attribution</div>
                  <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                    <svg width="34" height="34" viewBox="0 0 34 34">
                      {/* AI segment (39%) */}
                      <circle cx="17" cy="17" r="12" fill="none" stroke="var(--copper)" strokeWidth="6"
                        strokeDasharray={`${0.39 * 75.4} ${75.4}`} strokeDashoffset="0"
                        transform="rotate(-90 17 17)" />
                      {/* Human segment (61%) */}
                      <circle cx="17" cy="17" r="12" fill="none" stroke="var(--forest)" strokeWidth="6"
                        strokeDasharray={`${0.61 * 75.4} ${75.4}`} strokeDashoffset={`${-0.39 * 75.4}`}
                        transform="rotate(-90 17 17)" />
                    </svg>
                    <div>
                      <div className="p3-d-leg"><span className="p3-d-dot" style={{background:'var(--forest)'}}/> 61% Human</div>
                      <div className="p3-d-leg"><span className="p3-d-dot" style={{background:'var(--copper)'}}/> 39% AI</div>
                    </div>
                  </div>
                </div>
                {/* Verdict */}
                <div className="p3-ovs-stat" style={{flex:'1.4',borderRight:'none'}}>
                  <div className="p3-s-lbl">Verdict</div>
                  <div className="p3-verdict-title">Recommend advancing</div>
                  <div className="p3-verdict-desc">Strong problem solving, clean code, and solid system design understanding.</div>
                </div>
              </div>
            </div>

            {/* ── Mid Grid ── */}
            <div className="p3-mid-grid">
              {/* Left: Rubric table + Timeline */}
              <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                <div className="p3-card p3-card-pad">
                  <div className="p3-c-header">
                    <span className="p3-c-title">AI Rubric Scores</span>
                    <button className="p3-c-btn">Details</button>
                  </div>
                  <table className="p3-tbl">
                    <thead><tr>
                      <th>CRITERIA</th>
                      <th className="rt" style={{width:'56px'}}>SCORE</th>
                      <th className="rt" style={{width:'28px'}}>WT</th>
                      <th className="rt" style={{width:'28px'}}>WS</th>
                    </tr></thead>
                    <tbody>
                      {rubric.map(r => (
                        <tr key={r.name}>
                          <td>{r.name}</td>
                          <td className="rt">
                            <div className="p3-bar-wrap"><div className="p3-bar-fill" style={{width:`${r.pct}%`}}/></div>
                            {r.score}
                          </td>
                          <td className="rt">{r.w}</td>
                          <td className="rt st">{r.ws}</td>
                        </tr>
                      ))}
                      <tr>
                        <td className="st" style={{paddingTop:'8px',borderBottom:'none'}}>Total</td>
                        <td style={{borderBottom:'none'}}/>
                        <td className="rt st" style={{paddingTop:'8px',borderBottom:'none'}}>83.2%</td>
                        <td className="rt st" style={{paddingTop:'8px',borderBottom:'none'}}>8.32</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* SVG Timeline Chart */}
                <div className="p3-card p3-card-pad">
                  <div className="p3-c-header" style={{marginBottom:'4px'}}>
                    <span className="p3-c-title">Code Attribution Timeline</span>
                    <div style={{display:'flex',gap:'8px',alignItems:'center'}}>
                      <span className="p3-d-leg"><span className="p3-d-dot" style={{background:'var(--forest)'}}/> Human</span>
                      <span className="p3-d-leg"><span className="p3-d-dot" style={{background:'var(--copper)'}}/> AI</span>
                    </div>
                  </div>
                  <div style={{position:'relative', paddingTop:'4px'}}>
                    <svg width="100%" height="44" viewBox="0 0 100 36" preserveAspectRatio="none" style={{display:'block'}}>
                      {/* Human area fill */}
                      <defs>
                        <linearGradient id="hGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--forest)" stopOpacity="0.25"/>
                          <stop offset="100%" stopColor="var(--forest)" stopOpacity="0.04"/>
                        </linearGradient>
                        <linearGradient id="aGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--copper)" stopOpacity="0.2"/>
                          <stop offset="100%" stopColor="var(--copper)" stopOpacity="0.03"/>
                        </linearGradient>
                      </defs>
                      {/* Human polygon (area) */}
                      <polygon
                        points={`0,36 ${hPts} 100,36`}
                        fill="url(#hGrad)"
                      />
                      {/* Human line */}
                      <polyline
                        points={hPts}
                        fill="none" stroke="var(--forest)" strokeWidth="1.2" strokeLinejoin="round"
                      />
                      {/* AI polygon (area, anchored at bottom) */}
                      <polygon
                        points={`0,36 ${aiPts} 100,36`}
                        fill="url(#aGrad)"
                      />
                      {/* AI line */}
                      <polyline
                        points={aiPts}
                        fill="none" stroke="var(--copper)" strokeWidth="1" strokeLinejoin="round" strokeDasharray="2 2"
                      />
                      {/* X grid lines */}
                      {[25,50,75].map(x => (
                        <line key={x} x1={x} y1="0" x2={x} y2="36" stroke="var(--line)" strokeWidth="0.4"/>
                      ))}
                    </svg>
                    <div style={{display:'flex',justifyContent:'space-between',fontSize:'5.5px',color:'var(--muted)',fontFamily:'Geist,sans-serif',marginTop:'2px',paddingLeft:'2px',paddingRight:'2px'}}>
                      <span>00:00</span><span>42m</span><span>1h 24m</span><span>2h 06m</span><span>2h 48m</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Code review panel — flex-fills its grid cell */}
              <div className="p3-card p3-mid-right">

                <div className="p3-tabs">
                  <div className="p3-tab active">Code Review</div>
                  <div className="p3-tab">Replay</div>
                  <div className="p3-tab">AI Usage</div>
                  <div className="p3-tab">Debrief</div>
                  <div style={{marginLeft:'auto',alignSelf:'center',paddingRight:'8px'}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--ink-2)" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  </div>
                </div>
                <div className="p3-code-view">
                  <div className="p3-cv-side">
                    <div className="p3-cv-lbl">FILES</div>
                    {[
                      {name:'src', folder:true, depth:0},
                      {name:'controllers', folder:true, depth:1},
                      {name:'invoice.controller.ts', depth:2},
                      {name:'services', folder:true, depth:1},
                      {name:'invoice.service.ts', depth:2, active:true},
                      {name:'models', folder:true, depth:1},
                      {name:'invoice.model.ts', depth:2},
                      {name:'utils', folder:true, depth:1},
                      {name:'logger.ts', depth:2},
                    ].map((f,i) => (
                      <div key={i} className={`p3-cv-file${f.active?' active':''}${f.folder?' p3-cv-folder':''}`} style={{paddingLeft:`${4 + f.depth*8}px`}}>
                        {f.name}
                      </div>
                    ))}
                  </div>
                  <div className="p3-cv-main">
                    <div className="p3-cv-top">
                      <div className="p3-cv-path">services › invoice.service.ts</div>
                      <div className="p3-cv-lang">TypeScript</div>
                    </div>
                    <div className="p3-cv-code">
                      {[
                        [1, <><span className="p3-kw">export class</span> <span className="p3-fn">InvoiceService</span> {'{'}</>],
                        [2, <>&nbsp;&nbsp;<span className="p3-kw">async</span> <span className="p3-fn">retryPayment</span>(id: string) {'{'}</>],
                        [3, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="p3-kw">const</span> inv = <span className="p3-kw">await</span> Invoice.<span className="p3-fn">findById</span>(id);</>],
                        [4, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="p3-kw">if</span> (!inv) <span className="p3-kw">throw new</span> Error(<span className="p3-str">'Not found'</span>);</>],
                        [5, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="p3-kw">if</span> (inv.status === <span className="p3-str">'paid'</span>) <span className="p3-kw">return</span> inv;</>],
                        [6, <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="p3-kw">try</span> {'{'}</>],
                        [7, <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p3-kw">const</span> p = <span className="p3-kw">await</span> Payment.<span className="p3-fn">process</span>(inv.amount);</>],
                        [8, <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inv.status = <span className="p3-str">'paid'</span>;</>],
                        [9, <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p3-kw">await</span> inv.<span className="p3-fn">save</span>();</>],
                        [10, <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p3-kw">return</span> inv;</>],
                        [11, <>&nbsp;&nbsp;&nbsp;&nbsp;{'}'} <span className="p3-kw">catch</span> (e) {'{'}</>],
                        [12, <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.<span className="p3-fn">error</span>(<span className="p3-str">'Retry failed'</span>, e);</>],
                        [13, <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="p3-kw">throw</span> e;</>],
                        [14, <>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</>],
                        [15, <>&nbsp;&nbsp;{'}'}</>],
                        [16, <>{'}'}</>],
                      ].map(([n, content]) => (
                        <div key={String(n)} className="p3-line"><div className="p3-ln">{n}</div><div className="p3-lc">{content}</div></div>
                      ))}
                    </div>
                    <div className="p3-diff-box">
                      <div className="p3-db-head">
                        <span className="p3-db-title">AI SUGGESTED CHANGE <span style={{opacity:0.6,fontWeight:400,textTransform:'none',marginLeft:'6px'}}>View in Chat</span></span>
                        <span className="p3-db-link">+3 more</span>
                      </div>
                      <div className="p3-db-content">- await Payment.process(inv.amount);<br/>+ await Payment.process(inv.amount, {'{'} retry: 3, backoff: 'exp' {'}'});</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Agents Strip ── */}
            <div>
              <div className="p3-agents-hdr">AI Agent Evaluations</div>
              <div className="p3-agents-grid">
                {agents.map(a => (
                  <div key={a.name} className="p3-ag-card">
                    <div className="p3-ag-top"><span>{a.name}</span><span>›</span></div>
                    <div className="p3-ag-score">{a.score}<span> / 10</span></div>
                    <div className="p3-ag-desc">{a.desc}</div>
                  </div>
                ))}
                <div className="p3-ag-card p3-ag-more">
                  <div className="p3-ag-m-num">+5 Agents</div>
                  <div className="p3-ag-m-lbl">View all</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <span className="eyebrow">01 · Create Assessment</span>
            <h3>Connect your repo. Define your rubric. Send a link.</h3>
            <p>
              Link a GitHub repo or pick a pre-built template. Define custom evaluation criteria
              with 10+ AI review agents. Invite candidates with a single link. No scheduling, no
              setup.
            </p>
          </div>
          <Peek1 />
        </div>

        {/* Step 2 */}
        <div className="step">
          <div className="copy">
            <span className="eyebrow">02 · Candidate Experience</span>
            <h3>Candidates build on your actual codebase.</h3>
            <p>
              A browser-based IDE with Claude Code on your repo. No local setup. They build,
              debug, and refactor real code, exactly how they&apos;d work on the job.
            </p>
          </div>
          <Peek2 />
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="copy">
            <span className="eyebrow">03 · Review Results</span>
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
