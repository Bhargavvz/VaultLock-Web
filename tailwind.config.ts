import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3E4AFF',
          50: '#F0F1FF',
          100: '#E0E2FF',
          200: '#C2C6FF',
          300: '#A3A9FF',
          400: '#858DFF',
          500: '#3E4AFF',
          600: '#0B19FF',
          700: '#0010D6',
          800: '#000CA3',
          900: '#000870',
        },
        secondary: {
          DEFAULT: '#4CC9B0',
          50: '#E8F9F5',
          100: '#D1F3EC',
          200: '#A3E7D9',
          300: '#75DBC6',
          400: '#4CC9B0',
          500: '#30B099',
          600: '#268C7A',
          700: '#1C685B',
          800: '#12443C',
          900: '#08201D',
        },
        accent: {
          DEFAULT: '#5C9DFF',
          50: '#FFFFFF',
          100: '#F5F9FF',
          200: '#C7DFFF',
          300: '#99C5FF',
          400: '#6BABFF',
          500: '#5C9DFF',
          600: '#2478FF',
          700: '#005CEB',
          800: '#0046B3',
          900: '#00307B',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        dark: {
          bg: '#0F0F14',
          surface: '#18181F',
          card: '#1E1E26',
          border: '#2A2A35',
        },
        light: {
          bg: '#F7F8FA',
          surface: '#FFFFFF',
          card: '#FFFFFF',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #3E4AFF 0%, #4CC9B0 50%, #5C9DFF 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(228,100%,64%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(168,70%,54%,0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(218,100%,68%,0.3) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(228,100%,64%,0.2) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(168,70%,54%,0.3) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(62, 74, 255, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(62, 74, 255, 0.8)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(62, 74, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(62, 74, 255, 0.4)',
        'glow-secondary': '0 0 20px rgba(76, 201, 176, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
