/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Looks for utility classes in index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Looks for utility classes in JS/TS/JSX/TSX files inside the src folder
  ],
  theme: {
    extend: {}, // You can extend your theme here (e.g., custom colors, fonts, etc.)
  },
  plugins: [],
};
