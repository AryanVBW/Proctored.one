export default function Problem() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The Problem</span>
          <h2>Technical interviews were designed for a different era.</h2>
          <p>Engineers ship with AI every day. Most hiring processes still pretend they don&apos;t.</p>
        </div>
        <div className="problem-grid">
          <div className="problem-cell">
            <span className="num">01 · the gap</span>
            <h3>AI changed the job, but not the interview.</h3>
            <p>
              Every engineer uses AI to ship: boilerplate, debugging, architecture decisions.
              Most assessments either ban AI entirely or can&apos;t measure how it was used. You&apos;re
              testing for a job that doesn&apos;t exist anymore.
            </p>
          </div>
          <div className="problem-cell">
            <span className="num">02 · the burnout</span>
            <h3>Take-homes don&apos;t scale, and interviewers burn out.</h3>
            <p>
              Pairing an engineer with every candidate is the gold standard, but it doesn&apos;t scale.
              So teams fall back on algorithmic puzzles that tell you nothing about how someone
              actually builds.
            </p>
          </div>
          <div className="problem-cell">
            <span className="num">03 · the blindspot</span>
            <h3>You see the output. You never see the process.</h3>
            <p>
              Did they architect the solution or paste it from ChatGPT? Did they iterate
              thoughtfully or thrash? Today&apos;s assessments give you a score. They don&apos;t give you
              understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
