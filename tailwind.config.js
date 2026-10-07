import scrollbarHide from 'tailwind-scrollbar-hide';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Archivo", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: '#1a73e8',
        secondary: '#ff6600',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [
    scrollbarHide,
    forms,
    typography,
    aspectRatio,
  ],
  darkMode: 'class',
};
