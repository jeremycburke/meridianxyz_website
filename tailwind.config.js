/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'meridian-dark': '#303030',
        'meridian-gray': '#666666',
        'meridian-light': '#f0f0f0',
        'meridian-muted': 'rgba(170, 170, 170, 0.94)',
      },
      fontFamily: {
        'inter-light': ['Inter', 'sans-serif'],
        'inter-black': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

