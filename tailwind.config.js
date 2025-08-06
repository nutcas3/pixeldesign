/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        secondary: 'var(--color-secondary)',
        'secondary-light': 'var(--color-secondary-light)',
        'secondary-dark': 'var(--color-secondary-dark)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)'
        },
        accent: {
          blue: 'var(--color-accent-blue)',
          purple: 'var(--color-accent-purple)',
          pink: 'var(--color-accent-pink)',
          orange: 'var(--color-accent-orange)',
          yellow: 'var(--color-accent-yellow)'
        }
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        display: 'var(--font-display)'
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)'
      }
    },
  },
  plugins: [],
}
