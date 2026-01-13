import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Navigation } from '@/components/Navigation';
import { cn } from '@/utils/cn';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  weight: ['400', '300', '700'],
});

export const metadata: Metadata = {
  title: 'ETNA',
  description: 'Создаём цифровые продукты, которые меняют жизнь к лучшему',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn(inter.variable, 'min-w-75 font-sans')}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
