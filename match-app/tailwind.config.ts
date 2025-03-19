/** @type {import('tailwindcss').Config} */

import { Config } from 'tailwindcss';

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      }
    },
  },
  plugins: [],
} satisfies Config;
