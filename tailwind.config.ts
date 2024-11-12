import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#f75023',
      secondary: '#1cbe59',
      tertiary: '#8067f0',
      black: '#27292d',
      black_extra: '#2b2d32',
      black_third: '#222428',
      black_forth: '#1e1f23',
      black_light: '#404247',
      grey: '#adb5bd',
      white: '#eee',
      primary_shade: '#de4820',
    },
  },
  plugins: [],
};
export default config;
