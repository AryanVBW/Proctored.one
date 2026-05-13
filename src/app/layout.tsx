import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Proctored One: AI-Native Technical Assessments',
  description:
    'Hire the minds, not the keystrokes. Proctored One is the sealed, system-monitored workspace for AI-era technical assessments, with line-by-line AI attribution, behavioral signals, and a full audit trail.',
  keywords: ['technical assessment', 'AI hiring', 'code interview', 'proctored coding', 'AI attribution'],
  openGraph: {
    title: 'Proctored One: AI-Native Technical Assessments',
    description: 'See exactly how every candidate builds. Line-by-line AI attribution, behavioral signals, and full session replay.',
    type: 'website',
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
