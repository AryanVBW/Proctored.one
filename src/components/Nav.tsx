import Link from 'next/link';
import LogoMark from './LogoMark';

export default function Nav() {
  return (
    <nav className="top">
      <div className="wrap row">
        <Link href="/" className="logo-mark" aria-label="Proctored One home">
          <LogoMark color="#14110D" accentColor="#B8632F" />
          <span className="word">Proctored One</span>
        </Link>
        <div className="links">
          <a href="#platform">The Platform</a>
          <a href="#pricing">Pricing</a>
          <a href="#compare">Compare</a>
          <a href="#faq">FAQ</a>
          <a href="/control-panel" className="btn btn-ghost" style={{ padding: '8px 16px' }}>
            Open Demo →
          </a>
          <a href="#cta" className="btn btn-primary" style={{ padding: '10px 18px' }}>
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
