import type { Metadata } from 'next';
import { Manrope, Geist, Geist_Mono } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

import './globals.css';
import { Header } from './header';
import { Footer } from './footer';
import { GoogleAnalytics } from './google-analytics';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'AHEAD Medicine',
    template: '%s | AHEAD Medicine',
  },
  description: `AHEAD's Cyto-copilot enhances the efficiency, consistency, and scalability of flow cytometry analysis, empowering research, clinical diagnostics, and cell therapy quality control.`,
  keywords: ['Medicine', 'AI', 'cytometry'],
  authors: [
    { name: 'Andrea Wang' },
    { name: 'Kevin Ko' },
    { name: 'Jeremy Lee' },
  ],
  // TODO: Update this to the actual base URL when we deploy
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_NGROK_BASE_URL || 'https://yourwebsite.com',
  ),
  // For social media
  openGraph: {
    // The title displayed on social media
    title: 'AHEAD Medicine',
    // The description displayed on social media
    description: `AHEAD's Cyto-copilot enhances the efficiency, consistency, and scalability of flow cytometry analysis, empowering research, clinical diagnostics, and cell therapy quality control.`,
    // The image displayed on social media
    images: ['/images/ahead_logo.png'],
  },
  // Search engine
  robots: {
    // Allow search engine to index this page
    index: true,
    // Allow search engine to follow links on this page
    follow: true,
  },
  icons: {
    icon: '/images/ahead_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Check if we're in production then enable GA in future
  // const isProdEnv = process.env.NODE_ENV === 'production';
  const gaMeasurementId = 'G-6P1YY9WDWQ';

  return (
    <html lang="en">
      <body
        className={cn(
          `${manrope.variable} ${geistSans.variable} ${geistMono.variable} antialiased`,
          'grid min-h-screen grid-rows-[1fr,auto]',
        )}
      >
        {gaMeasurementId && (
          <GoogleAnalytics gaMeasurementId={gaMeasurementId} />
        )}
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
