/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },

  content: [
    "./scripts/script.js",
    "./index.html",
    "./css/style.css",
    "./public/assets/pages/admin.html",
    "./assets/pages/hr.html",
    "./assets/pages/manager.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
