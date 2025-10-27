/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f0ff',
          100: '#e9e3ff',
          200: '#d6ccff',
          300: '#b8a6ff',
          400: '#9575ff',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3c1a78',
        },
        violet: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        dark: {
          50: '#1a1a2e',
          100: '#16213e',
          200: '#0f1419',
          300: '#0d0a15',
          400: '#0a0a0a',
        },
        border: '#374151'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4D00FF 0%, #0A00B6 50%, #7C00FF 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0D0A15 0%, #1a1a2e 50%, #16213e 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(77, 0, 255, 0.1) 0%, rgba(10, 0, 182, 0.1) 100%)',
      },
      boxShadow: {
        'violet-glow': '0 0 20px rgba(162, 89, 255, 0.3)',
        'violet-glow-lg': '0 0 40px rgba(162, 89, 255, 0.4)',
        'card-glow': '0 10px 40px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(162, 89, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(162, 89, 255, 0.6)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
