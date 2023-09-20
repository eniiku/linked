import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter, Montserrat } from 'next/font/google';

import Navbar from '@/components/Navbar';

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const clash_display = localFont({
  src: '../public/fonts/ClashDisplay-Bold.woff2',
  display: 'swap',
  variable: '--font-clash-display',
});

const inter = Inter({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'GetLinked',
  description: 'A tech hackathon igniting a revolutionin HR innovation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${montserrat.variable} ${clash_display.variable}`}
    >
      <body className='bg-purple'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
