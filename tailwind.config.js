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
    "./pages/admin.html",
    "./pages/hr.html",
    "./pages/manager.html",
    "./pages/createaccount-admin.html",
    "./pages/createaccount-hr.html",
    "./pages/createaccount-manager.html".
    "./pages/forgot-password.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
