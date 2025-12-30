/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#050505',       // Negro Absoluto
          dark: '#0a0a0a',     // Fondo secundario
          card: '#121212',     // Tarjetas gris oscuro
          text: '#f8fafc',     // Blanco Off-white
          muted: '#94a3b8',    // Gris texto secundario
          primary: '#00f2ea',  // Cyan Neón (Electricidad)
          secondary: '#7000ff',// Violeta Neón
          accent: '#ff0055',   // Rojo/Rosa Neón
          border: '#333333',   // Bordes sutiles
        }
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 242, 234, 0.3)',
        'neon-red': '0 0 20px rgba(255, 0, 85, 0.3)',
        'glow': '0 0 15px rgba(0, 242, 234, 0.15), 0 0 30px rgba(112, 0, 255, 0.1)',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'marquee': 'marquee 20s linear infinite',
        'drive': 'drive 6s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drive: {
          '0%': { transform: 'translateX(-20vw)' },
          '100%': { transform: 'translateX(120vw)' },
        }
      }
    }
  },
  plugins: [],
}