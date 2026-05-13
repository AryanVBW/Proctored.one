'use client';

import { useState } from 'react';

const ROLES = [
  'Engineering Manager',
  'Head of Talent / Recruiting',
  'CTO / VP Engineering',
  'Founder',
  'Recruiter / Sourcer',
  'HR Business Partner',
  'Other',
];

const TEAM_SIZES = [
  '1–10 engineers',
  '11–50 engineers',
  '51–200 engineers',
  '200+ engineers',
];

export default function BookDemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit — replace with real API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="book-form-card book-form-success" role="alert" aria-live="polite">
        <div className="book-success-icon" aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
          </svg>
        </div>
        <h2 className="book-success-h2">You&rsquo;re on the list.</h2>
        <p className="book-success-p">
          We&rsquo;ll send you a calendar link within one business day to pick a slot.
          Check your inbox, and your spam, just in case.
        </p>
        <div className="book-success-next">
          <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>
            While you wait
          </span>
          <ul className="book-success-links">
            <li>
              <a href="/control-panel" className="book-success-link">
                Explore the Control Panel demo →
              </a>
            </li>
            <li>
              <a href="/#platform" className="book-success-link">
                Read how the platform works →
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <form
      className="book-form-card"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Book a Demo form"
    >
      <div className="book-form-header">
        <span className="eyebrow">30-minute walkthrough</span>
        <p className="book-form-subtitle">
          No commitment. We&rsquo;ll send a calendar link to pick a time.
        </p>
      </div>

      <div className="book-form-row">
        <div className="book-field">
          <label htmlFor="demo-first-name" className="book-label">First name</label>
          <input
            id="demo-first-name"
            type="text"
            name="firstName"
            className="book-input"
            placeholder="Alex"
            required
            autoComplete="given-name"
          />
        </div>
        <div className="book-field">
          <label htmlFor="demo-last-name" className="book-label">Last name</label>
          <input
            id="demo-last-name"
            type="text"
            name="lastName"
            className="book-input"
            placeholder="Chen"
            required
            autoComplete="family-name"
          />
        </div>
      </div>

      <div className="book-field">
        <label htmlFor="demo-email" className="book-label">Work email</label>
        <input
          id="demo-email"
          type="email"
          name="email"
          className="book-input"
          placeholder="alex@yourcompany.com"
          required
          autoComplete="email"
        />
      </div>

      <div className="book-field">
        <label htmlFor="demo-company" className="book-label">Company</label>
        <input
          id="demo-company"
          type="text"
          name="company"
          className="book-input"
          placeholder="Acme Corp"
          required
          autoComplete="organization"
        />
      </div>

      <div className="book-form-row">
        <div className="book-field">
          <label htmlFor="demo-role" className="book-label">Your role</label>
          <div className="book-select-wrap">
            <select id="demo-role" name="role" className="book-select" required>
              <option value="" disabled selected>Select role…</option>
              {ROLES.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <svg className="book-select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
        <div className="book-field">
          <label htmlFor="demo-team-size" className="book-label">Engineering team size</label>
          <div className="book-select-wrap">
            <select id="demo-team-size" name="teamSize" className="book-select" required>
              <option value="" disabled selected>Select size…</option>
              {TEAM_SIZES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <svg className="book-select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="book-field">
        <label htmlFor="demo-message" className="book-label">
          What are you trying to solve? <span className="book-label-opt">(optional)</span>
        </label>
        <textarea
          id="demo-message"
          name="message"
          className="book-textarea"
          rows={3}
          placeholder="E.g. We're scaling backend hiring and need better signal on AI use…"
        />
      </div>

      <button
        id="demo-submit-btn"
        type="submit"
        className="btn btn-primary book-submit-btn"
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? (
          <>
            <svg className="book-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            Sending…
          </>
        ) : (
          'Request my demo →'
        )}
      </button>

      <p className="book-form-fine">
        By submitting you agree to our{' '}
        <a href="#" className="book-form-link">Privacy Policy</a>.
        We don&rsquo;t sell data, ever.
      </p>
    </form>
  );
}
