import { Inter, JetBrains_Mono } from 'next/font/google';
import { profile } from '@/lib/data';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://rijalsandeshraj.github.io'),
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
  keywords: [
    'Sandesh Rijal',
    'Flutter Developer',
    '.NET Developer',
    'Technical Lead',
    'Dubai',
    'Mobile Engineer',
    'Dart',
    'Node.js',
  ],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    type: 'profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
  },
};

export const viewport = {
  themeColor: '#05070a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
