import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter, Montserrat, Unica_One } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-montserrat',
});

const clash_display = localFont({
  src: '../public/fonts/ClashDisplay-Bold.woff2',
  display: 'swap',
  variable: '--font-clash-display',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const unica_one = Unica_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unica',
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
      className={`${montserrat.variable} ${clash_display.variable} ${inter.variable} ${unica_one.variable} scroll-smooth`}
    >
      <body className='bg-purple'>{children}</body>
    </html>
  );
}
