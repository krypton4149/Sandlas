/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0057ff',
        'secondary': '#f8f0db',
        'tertiary': '#171724',
        'quaternary': '#0E1A52',
      },
      fontFamily: {
        sandalsSans: ['sandalsSans', 'sans-serif'],
        sandalsSlab: ['sandalsSlab', 'sans-serif'],
        sandalsScript: ['sandalsScript', 'sans-serif'],
      },
    },
  },
  plugins: [],
}