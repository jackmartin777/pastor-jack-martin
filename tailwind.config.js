/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0F2043',
          gray: '#6E7271',
          gold: '#DC9E18',
          light: '#E7ECEF',
          cream: '#FBFBF2',
          burgundy: '#44050c'
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #44050c 0%, #0F2043 100%)',
        'gradient-gold': 'linear-gradient(135deg, #DC9E18 0%, #E7ECEF 100%)',
        'hero-pattern': "linear-gradient(to bottom, rgba(15, 32, 67, 0.92), rgba(68, 5, 12, 0.95)), url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};