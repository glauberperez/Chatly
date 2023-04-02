/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'light-purple': '#b4a7d6',
      'white': '#ffffff',
    },
    fontFamily: {
      sanfrancisco: ["San Francisco", "sans-serif"],
    },
  },
  plugins: [],
}