/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'reforma_2018negra': ['reforma_2018negra', 'sans','reforma_2018blanca'],
        'sans-serif': ["reforma_2018negra", 'Sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

