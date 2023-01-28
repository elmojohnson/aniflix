/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
        muted: "#9ca3af"
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
