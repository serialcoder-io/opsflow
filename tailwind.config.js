import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/renderer/src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        defaul: [
          'Roboto',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Liberation Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        heading: ['Amatic SC', 'sans-serif'],
        nav: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [daisyui]
}
