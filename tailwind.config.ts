import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pure-black': '#000000',
        'off-black': '#121212',
        'dark-gray': '#1E1E1E',
        'pure-white': '#FFFFFF',
        'off-white': '#F5F5F5',
        'light-gray': '#D9D9D9',
        'medium-gray': '#A3A3A3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config