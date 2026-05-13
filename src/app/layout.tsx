import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://proctored.one'),
  title: {
    default: 'Proctored One | AI-Native Technical Assessments',
    template: '%s | Proctored One',
  },
  description:
    'Hire the minds, not the keystrokes. Proctored One is the sealed, system-monitored workspace for AI-era technical assessments, with line-by-line AI attribution, behavioral signals, and a full audit trail.',
  keywords: ['technical assessment', 'AI hiring', 'code interview', 'proctored coding', 'AI attribution', 'developer hiring'],
  authors: [{ name: 'Proctored One' }],
  creator: 'Proctored One',
  publisher: 'Proctored One',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Proctored One | AI-Native Technical Assessments',
    description: 'See exactly how every candidate builds. Line-by-line AI attribution, behavioral signals, and full session replay.',
    url: 'https://proctored.one',
    siteName: 'Proctored One',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proctored One | AI-Native Technical Assessments',
    description: 'See exactly how every candidate builds. Line-by-line AI attribution, behavioral signals, and full session replay.',
    creator: '@proctoredone',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
