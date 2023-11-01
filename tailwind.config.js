/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shoppyBlack: "#001524",
        shoppyGray: "#9E9FA5",
        shoppyAccent: "#51cbe0",
      },
    },
  },
  plugins: [],
};
