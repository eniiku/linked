import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        clash: ['var(--font-clash-display)'],
        inter: ['var(--font-inter)'],
        unica: ['var(--font-unica)'],
      },
      colors: {
        primary: 'rgb(var(--clr-pry) / 1)',
        'primary-alt': 'rgb(var(--clr-pry-alt) / 1)',
        purple: 'rgb(var(--clr-purple) / 1)',
        pink: 'rgb(var(--clr-pink) / 1)',
      },
    },
  },
  plugins: [],
};
export default config;
