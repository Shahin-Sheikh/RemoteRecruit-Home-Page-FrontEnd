/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette sampled from the RemoteRecruit Figma design
        ink: {
          DEFAULT: '#13123a', // primary heading navy
          soft: '#1c1d4a',
        },
        body: '#6b7280', // paragraph / muted text
        brand: {
          // cyan / teal accent used for CTAs, links and the logo "Remote"
          50: '#e8f8fd',
          100: '#cdeef8',
          200: '#a6e2f3',
          300: '#6fd0ea',
          400: '#33bce0',
          500: '#22b8de',
          600: '#1ba0c6',
          700: '#1782a3',
        },
        royal: {
          // deep indigo / blue used in the hero + footer gradients
          50: '#eef0fb',
          100: '#dfe3f7',
          500: '#3a3d8f',
          600: '#2f3a93',
          700: '#2a3a86',
          800: '#222a6b',
          900: '#1b2056',
        },
        mist: '#f5f7ff', // light lavender section background
        // Accessible CTA cyan — deep enough for white text to clear WCAG AA (4.7:1)
        cta: {
          DEFAULT: '#0f7e95',
          dark: '#0b6a7f',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        card: '0 24px 60px -20px rgba(28, 32, 84, 0.25)',
        soft: '0 18px 40px -18px rgba(28, 32, 84, 0.18)',
        pill: '0 10px 30px -10px rgba(34, 184, 222, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
