import type { Config } from 'tailwindcss';
import type { PluginUtils } from 'tailwindcss/types/config';

const widthExtensions = ({ theme }: PluginUtils) => ({
  section: `calc(100% - ${theme('spacing.8')})`,
});

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
        body: ['"DM Sans"', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      maxWidth: widthExtensions,
      width: widthExtensions,
      flexGrow: {
        2: '2',
      },
    },
  },
  plugins: [],
};
export default config;
