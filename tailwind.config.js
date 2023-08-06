/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
        'breadley': ['Breadley Sans', 'sans-serif'] 
      },
      colors: {
        beige: {
          100: "#F9F4EF",
          200: "#E2DFDF",
          400: "#d1ab85",
          800: "#23180d",
          900: '#221F1F',
        },
      },
    },
  },
  plugins: [],
};
