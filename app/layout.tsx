import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

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
      <body>{children}</body>
    </html>
  );
}
