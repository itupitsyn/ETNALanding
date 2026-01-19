import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { cn } from '@/lib/utils/cn';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  weight: ['400', '300', '700'],
});

const pt_root = localFont({
  src: '../lib/assets/fonts/PT Root UI_VF.woff2',
  variable: '--pt-root',
});

export const metadata: Metadata = {
  manifest: '/site.webmanifest',
  title: 'ETNA',
  description: 'Создаём цифровые продукты, которые меняют жизнь к лучшему',

  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/icons/favicon.ico',
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={cn(inter.variable, pt_root.variable, 'min-w-75 font-sans')}>
        <div className="absolute top-5 left-0 z-10 w-full">
          <Navigation className="container py-3" />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}
