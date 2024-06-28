/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      poppins:["poppins", "sans-serif"],
      outfit : ["Outfit",],
      code: ["Code"]
    },
    
    extend: {
      boxShadow: {
        'deep': '0 35px 60px -15px rgba(1, 1, 1, 0.5)',
      },
    },
  }
}
