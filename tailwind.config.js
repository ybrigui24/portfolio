/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#0a0a0f',
        haze: 'rgba(10, 10, 18, 0.55)',
        violet: {
          glow: '#7a6eff',
        },
        magenta: {
          glow: '#db44d3',
        },
        lilac: '#d0bce1',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
