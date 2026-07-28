/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0B0C10',
        'bg-card': '#13141A',
        'bg-card-hover': '#1A1B24',
        'accent-yellow': '#F5C518',
        'accent-white': '#FFFFFF',
        'accent-amber': '#F59E0B',
        'text-primary': '#F5F5F7',
        'text-muted': '#A0A0AA',
        'text-subtle': '#6B6B7A',
        'border-subtle': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['"Clash Display"', '"Satoshi"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', '"General Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'pill': '999px',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #F5C518 0%, #FFFFFF 100%)',
        'gradient-brand-45': 'linear-gradient(45deg, #F5C518 0%, #FFFFFF 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0B0C10 0%, #13141A 100%)',
      },
      boxShadow: {
        'glow-yellow': '0 0 40px rgba(245, 197, 24, 0.3)',
        'glow-white': '0 0 40px rgba(255, 255, 255, 0.2)',
        'glow-amber': '0 0 40px rgba(245, 158, 11, 0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245,197,24,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(245,197,24,0.8)' },
        }
      },
    },
  },
  plugins: [],
}
