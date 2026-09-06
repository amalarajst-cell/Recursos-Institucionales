/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#153244',          // Fondo base / Primario: Azul profundo
        'brand-primary': '#153244',
        'brand-yellow': '#FFC600',        // Secundario / Énfasis y llamadas a la acción: Amarillo cálido
        'brand-secondary': '#FFC600',
        'brand-turquoise': '#8DE2D6',     // Terciario / Acentos y elementos de guía: Turquesa menta
        'brand-mint': '#8DE2D6',
        'brand-white': '#FFFFFF',         // Neutro de soporte: Blanco
        'brand-surface': '#1B3E54',       // Superficie de contenedores sobre fondo azul
        'brand-surface-light': '#234D68',
        'brand-border': '#2A5473',
      },
      fontFamily: {
        'archivo': ['"Archivo"', 'sans-serif'],
        'brand-heading': ['"Archivo"', 'sans-serif'],
        'brand-body': ['"Archivo"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.4)',
        'yellow-glow': '0 0 25px rgba(255, 198, 0, 0.35)',
        'mint-glow': '0 0 25px rgba(141, 226, 214, 0.25)',
      }
    },
  },
  plugins: [],
}
