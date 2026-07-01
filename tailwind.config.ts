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
        'garage-black': '#111111',
        'garage-white': '#EDE7DC',
        'garage-amber': '#C08A3E',
        'garage-wine':  '#7A1F2B',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
