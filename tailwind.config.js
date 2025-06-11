module.exports = {
  purge: [
    './index.html',
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        indigo: {
          100: '#e0e7ff',
          500: '#667eea',
          600: '#5a67d8',
        },
        purple: {
          600: '#764ba2',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        glow: {
          'from': { filter: 'drop-shadow(0 0 20px rgba(102, 126, 234, 0.3))' },
          'to': { filter: 'drop-shadow(0 0 30px rgba(118, 75, 162, 0.5))' },
        }
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      translate: ['hover', 'focus'],
      boxShadow: ['hover', 'focus'],
      opacity: ['hover'],
    },
  },
  plugins: [],
}