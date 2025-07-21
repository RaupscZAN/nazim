/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        gold: {
          50: '#fff9eb',
          100: '#ffefc4',
          200: '#ffe49d',
          300: '#ffd376',
          400: '#ffc24f',
          500: '#ffac28',
          600: '#fd9400',
          700: '#d27700',
          800: '#aa5f07',
          900: '#8b4f0c',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      spacing: {
        '128': '32rem',
      },
      aspectRatio: {
        'w-4': 4,
        'h-3': 3,
        'w-16': 16,
        'h-9': 9,
      },
    },
  },
  plugins: [],
};