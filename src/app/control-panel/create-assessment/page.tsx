'use client';

import { useState } from 'react';
import Link from 'next/link';
import LogoMark from '@/components/LogoMark';

/* ── Sidebar nav data ── */
const SIDEBAR_SECTIONS = [
  {
    label: 'ASSESSMENTS',
    items: [
      { icon: '◫', label: 'All Assessments', href: '#' },
      { icon: '◱', label: 'Drafts', href: '#', badge: 3 },
      { icon: '◧', label: 'Templates', href: '#' },
      { icon: '⊟', label: 'Question Bank', href: '#' },
    ],
  },
  {
    label: 'ANALYTICS',
    items: [
      { icon: '◈', label: 'Overview', href: '#' },
      { icon: '◉', label: 'Reports', href: '#' },
      { icon: '◎', label: 'AI Agent Performance', href: '#' },
    ],
  },
  {
    label: 'SETTINGS',
    items: [
      { icon: '◌', label: 'Team', href: '#' },
      { icon: '⌂', label: 'Integrations', href: '#' },
      { icon: '◻', label: 'Billing', href: '#' },
      { icon: '◯', label: 'Assessment Settings', href: '#' },
    ],
  },
];

const STEPS = ['Setup', 'Rubric', 'Agents', 'Invite'];

const RUBRIC_TAGS = [
  'Code Quality',
  'Architecture',
  'Test Coverage',
  'AI Prompt Discipline',
  'Error Handling',
  '+ 5 more',
];

const AGENTS = [
  { name: 'Code Quality', desc: 'Focuses on code quality and best practices', checked: true },
  { name: 'Architecture', desc: 'Evaluates system design and architecture', checked: true },
  { name: 'Test Coverage', desc: 'Analyzes tests thoroughness', checked: true },
  { name: 'AI Prompt Discipline', desc: 'Reviews prompt quality and AI usage patterns', checked: true },
  { name: 'Error Handling', desc: 'Checks resilience and error management', checked: true },
  { name: 'Security', desc: 'Identifies security issues and vulnerabilities', checked: true },
  { name: 'Performance', desc: 'Analyzes efficiency and performance', checked: true },
  { name: 'Readability', desc: 'Assesses code clarity and maintainability', checked: true },
  { name: 'Best Practices', desc: 'Checks adherence to industry standards', checked: true },
  { name: 'Documentation', desc: 'Evaluates docs and code comments', checked: true },
];

export default function CreateAssessmentPage() {
  const [activeStep] = useState(0);
  const [branch, setBranch] = useState('main');
  const [visibility, setVisibility] = useState('Private');
  const [agents, setAgents] = useState(AGENTS);
  const [saved] = useState(true);

  const toggleAgent = (i: number) => {
    setAgents((prev) =>
      prev.map((a, idx) => (idx === i ? { ...a, checked: !a.checked } : a))
    );
  };

  return (
    <div className="cp-layout">
      {/* ── Sidebar ── */}
      <aside className="cp-sidebar">
        <div className="cp-sidebar-logo">
          <Link href="/" className="logo-mark" aria-label="Proctored One home">
            <LogoMark color="#14110D" accentColor="#B8632F" />
            <span className="word">Proctored One</span>
          </Link>
        </div>

        {SIDEBAR_SECTIONS.map((section) => (
          <div key={section.label} className="cp-nav-section">
            <span className="cp-nav-label">{section.label}</span>
            <ul className="cp-nav-list">
              {section.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="cp-nav-item">
                    <span className="cp-nav-icon">{item.icon}</span>
                    <span className="cp-nav-text">{item.label}</span>
                    {item.badge !== undefined && (
                      <span className="cp-nav-badge">{item.badge}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Plan pill */}
        <div className="cp-plan-block">
          <div className="cp-plan-name">Enterprise Plan</div>
          <div className="cp-plan-detail">15 assessments remaining</div>
          <div className="cp-plan-detail">Renews in 12 days</div>
          <div className="cp-plan-bar">
            <div className="cp-plan-bar-fill" style={{ width: '62%' }} />
          </div>
        </div>

        {/* User row */}
        <div className="cp-user-row">
          <div className="cp-avatar">AM</div>
          <div className="cp-user-info">
            <div className="cp-user-name">Alex Morgan</div>
            <div className="cp-user-email">alex@acmecorp.com</div>
          </div>
          <span className="cp-user-caret">⌄</span>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="cp-main">
        {/* Top bar */}
        <div className="cp-topbar">
          <h1 className="cp-page-title">New Assessment</h1>
          <div className="cp-topbar-actions">
            {saved && (
              <span className="cp-autosave">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Autosaved 2m ago
              </span>
            )}
            <button className="btn btn-ghost cp-preview-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Preview Assessment
            </button>
            <button className="btn btn-primary cp-create-btn">Create Assessment</button>
          </div>
        </div>

        {/* Step indicator */}
        <div className="cp-steps">
          {STEPS.map((step, i) => (
            <div key={step} className={`cp-step ${i === activeStep ? 'active' : i < activeStep ? 'done' : ''}`}>
              <div className="cp-step-circle">
                {i < activeStep ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span className="cp-step-label">{step}</span>
              {i < STEPS.length - 1 && <div className="cp-step-connector" />}
            </div>
          ))}
        </div>

        {/* Scroll content */}
        <div className="cp-content">

          {/* ── Repository ── */}
          <div className="cp-card">
            <div className="cp-card-header">
              <div className="cp-card-title-row">
                <span className="cp-card-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </span>
                <div>
                  <div className="cp-card-title">Repository</div>
                  <div className="cp-card-subtitle">Connect a GitHub repository to host the assessment</div>
                </div>
              </div>
            </div>

            <div className="cp-repo-connected">
              <span className="cp-repo-github-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </span>
              <span className="cp-repo-url">github.com/acme/billing-service</span>
              <button className="btn btn-ghost cp-change-btn">Change Repository</button>
            </div>

            <div className="cp-repo-meta">
              <div className="cp-repo-field">
                <label className="cp-field-label">Branch</label>
                <select className="cp-select" value={branch} onChange={(e) => setBranch(e.target.value)}>
                  <option>main</option>
                  <option>develop</option>
                  <option>staging</option>
                </select>
              </div>
              <div className="cp-repo-field">
                <label className="cp-field-label">Path (optional)</label>
                <input className="cp-input" type="text" placeholder="/" defaultValue="/" />
              </div>
              <div className="cp-repo-field">
                <label className="cp-field-label">Visibility</label>
                <div className="cp-visibility-select">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <select className="cp-select" value={visibility} onChange={(e) => setVisibility(e.target.value)}>
                    <option>Private</option>
                    <option>Public</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* ── Evaluation Rubric ── */}
          <div className="cp-card">
            <div className="cp-card-header cp-card-header-row">
              <div className="cp-card-title-row">
                <span className="cp-card-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </span>
                <div>
                  <div className="cp-card-title">Evaluation Rubric</div>
                  <div className="cp-card-subtitle">Define custom evaluation criteria for this assessment</div>
                </div>
              </div>
              <button className="btn btn-ghost cp-change-btn">Edit Rubric</button>
            </div>

            <div className="cp-tags">
              {RUBRIC_TAGS.map((tag) => (
                <span
                  key={tag}
                  className={`cp-tag ${tag.startsWith('+') ? 'cp-tag-more' : ''}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── AI Review Agents ── */}
          <div className="cp-card">
            <div className="cp-card-header cp-card-header-row">
              <div className="cp-card-title-row">
                <span className="cp-card-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M20 21a8 8 0 1 0-16 0" />
                  </svg>
                </span>
                <div>
                  <div className="cp-card-title">AI Review Agents <span className="cp-agent-count">(10+)</span></div>
                  <div className="cp-card-subtitle">Select AI agents that will evaluate this assessment</div>
                </div>
              </div>
              <button className="btn btn-ghost cp-change-btn">Manage Agents</button>
            </div>

            <div className="cp-agents-grid">
              {agents.map((agent, i) => (
                <div key={agent.name} className="cp-agent-card">
                  <div className="cp-agent-header">
                    <span className="cp-agent-avatar">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M20 21a8 8 0 1 0-16 0" />
                      </svg>
                    </span>
                    <div>
                      <div className="cp-agent-name">{agent.name}</div>
                      <div className="cp-agent-role">Agent</div>
                    </div>
                  </div>
                  <div className="cp-agent-desc">{agent.desc}</div>
                  <div className="cp-agent-footer">
                    <label className="cp-checkbox-label">
                      <input
                        type="checkbox"
                        className="cp-checkbox"
                        checked={agent.checked}
                        onChange={() => toggleAgent(i)}
                      />
                      <span className="cp-checkbox-custom">
                        {agent.checked && (
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </span>
                    </label>
                  </div>
                </div>
              ))}

              {/* Add agent card */}
              <button className="cp-add-agent-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add Agent
              </button>
            </div>
          </div>

          {/* ── Invite Candidates ── */}
          <div className="cp-card">
            <div className="cp-card-header">
              <div className="cp-card-title-row">
                <span className="cp-card-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <div className="cp-card-title">Invite Candidates</div>
                  <div className="cp-card-subtitle">Share the assessment link with candidates</div>
                </div>
              </div>
            </div>

            <div className="cp-invite-row">
              <div className="cp-invite-link-box">
                https://proctored.one/assessments/abc123def456
              </div>
              <button className="btn btn-primary cp-copy-btn">Copy Link</button>
              <button className="cp-icon-btn" aria-label="Copy to clipboard">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>

            <div className="cp-invite-meta">
              <span className="cp-invite-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Secure link
              </span>
              <span className="cp-invite-sep">·</span>
              <span className="cp-invite-meta-item">No login required for candidates</span>
              <span className="cp-invite-sep">·</span>
              <span className="cp-invite-meta-item">Expires in 30 days</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
