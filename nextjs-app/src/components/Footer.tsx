import Link from 'next/link';
import LogoMark from './LogoMark';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="grid">
          <div>
            <Link href="/" className="logo-mark" aria-label="Proctored One home">
              <LogoMark color="#F8F4EA" accentColor="#D89A4E" />
              <span className="word" style={{ color: 'var(--paper)' }}>
                Proctored One
              </span>
            </Link>
            <p className="tagline">See how your next hire actually builds.</p>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="#platform">The Platform</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#compare">Compare</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="/control-panel">Control Panel Demo</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter / X</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Data Retention</a></li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <span>© 2026 Proctored One, Inc.</span>
          <span>Made for engineering teams who build with AI.</span>
        </div>
      </div>
    </footer>
  );
}
