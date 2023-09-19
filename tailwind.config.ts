import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tdn-primary': '#102766',
        'tdn-secondary': '#405bb2',
        'tdn-highlight': '#ffd3da',
        'tdn-highlight-pale': '#fff3f5',
        'tdn-highlight-dark': '#ecadb7',
      },
      fontFamily: {
        heading: ['Bame', 'Arial', 'Helvetica', 'sans-serif'],
        body: ['"DM Sans"', 'DM Sans', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
