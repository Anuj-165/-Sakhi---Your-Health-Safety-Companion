/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B9A',
          dark: '#C2185B',
        },
        secondary: {
          lavender: '#E6E6FA',
          peach: '#FFD6C2',
          skyblue: '#87CEEB',
          mint: '#A8E6CF',
        },
        accent: {
          gold: '#FFD700',
          coral: '#FF7F50',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #FF6B9A, #C2185B)',
        'calm-gradient': 'linear-gradient(135deg, #E6E6FA, #A8E6CF)',
        'empowerment-gradient': 'linear-gradient(135deg, #FFD6C2, #FF6B9A)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'bot-idle': 'botIdle 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
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
        botIdle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};