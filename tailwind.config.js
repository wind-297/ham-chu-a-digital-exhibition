/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        archive: {
          ivory: '#EAE3D5',
          paper: '#F5F0E6',
          parchment: '#FAF7F2',
          umber: '#665344',
          olive: '#41483A',
          charcoal: '#262723',
          terracotta: '#A65F4B',
          stone: '#A69E8F',
          dark: '#1C1E19',
          border: '#D8D0C2',
          card: '#FDFBF7',
        }
      },
      fontFamily: {
        serif: ['"Source Serif 4"', '"Noto Serif"', 'Georgia', 'serif'],
        sans: ['"Be Vietnam Pro"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'archive': '0 4px 20px -2px rgba(38, 39, 35, 0.08), 0 2px 6px -1px rgba(38, 39, 35, 0.04)',
        'archive-lg': '0 10px 30px -4px rgba(38, 39, 35, 0.12), 0 4px 10px -2px rgba(38, 39, 35, 0.06)',
      }
    },
  },
  plugins: [],
}
