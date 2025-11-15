module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      /* ============================================
         COLORES PERSONALIZADOS
         ============================================ */
      colors: {
        // Paleta Primaria: Negro, Azul, Blanco
        slate: {
          950: '#0f172a',  // Negro profundo
          900: '#0f1729',
          850: '#1a2749',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f1f5f9',
        },
        blue: {
          700: '#0052cc',  // Azul oscuro
          600: '#0066ff',  // Azul principal empresarial
          500: '#3385ff',  // Azul medio
          400: '#66a3ff',  // Azul claro
        },
        sky: {
          600: '#0284c7',  // Sky oscuro
          500: '#0ea5e9',  // Sky principal
          400: '#38bdf8',  // Sky claro
        },
        cyan: {
          500: '#06b6d4',  // Cyan principal
          400: '#22d3ee',  // Cyan vibrante
        },
        accent: {
          primary: '#0066ff',
          secondary: '#0ea5e9',
          tertiary: '#06b6d4',
        },
      },

      /* ============================================
         PUNTOS DE INTERRUPCIÓN (BREAKPOINTS)
         ============================================ */
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'ultra': '1920px',
      },

      /* ============================================
         TAMAÑOS DE FUENTE PERSONALIZADOS
         ============================================ */
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },

      /* ============================================
         ESPACIOS PERSONALIZADOS
         ============================================ */
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-bottom))',
      },

      /* ============================================
         DURACIONES & TIEMPOS
         ============================================ */
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '500': '500ms',
      },

      /* ============================================
         ANIMACIONES PERSONALIZADAS
         ============================================ */
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float-slow 4s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-down': 'slide-down 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'bounce-smooth': 'bounce-smooth 2s ease-in-out infinite',
      },

      /* ============================================
         KEYFRAMES PERSONALIZADOS
         ============================================ */
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        'gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(14, 165, 233, 0.6)' },
        },
        'slide-down': {
          'from': { transform: 'translateY(-1rem)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-up': {
          'from': { transform: 'translateY(1rem)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'bounce-smooth': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      /* ============================================
         SOMBRAS PERSONALIZADAS
         ============================================ */
      boxShadow: {
        'glow': '0 0 20px rgba(0, 102, 255, 0.4), 0 0 40px rgba(0, 102, 255, 0.25)',
        'glow-lg': '0 0 30px rgba(0, 102, 255, 0.5), 0 0 60px rgba(0, 102, 255, 0.35)',
        'glow-dark': '0 0 20px rgba(10, 14, 39, 0.4), 0 0 40px rgba(10, 14, 39, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(0, 102, 255, 0.15)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 10px 15px -3px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 102, 255, 0.15), 0 25px 50px -12px rgba(0, 102, 255, 0.12), 0 0 40px rgba(0, 102, 255, 0.08)',
        'card-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 10px 15px -3px rgba(0, 0, 0, 0.2)',
        'elegant': '0 10px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
        'elegant-lg': '0 20px 60px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06)',
      },

      /* ============================================
         FONDOS PERSONALIZADOS
         ============================================ */
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-blue': 'linear-gradient(135deg, #0066ff 0%, #0052cc 50%, #003d99 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0e27 0%, #1e3a8a 100%)',
        'gradient-sky': 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0066ff 100%)',
        'gradient-elegant': 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.95) 100%)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'display': ['Space Grotesk', 'Inter', 'sans-serif'],
        'heading': ['Space Grotesk', 'Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
      },

      /* ============================================
         BORDES PERSONALIZADOS
         ============================================ */
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
