/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["*"],
  theme: {
    extend: {
      fontSize:{
        sm:"12px",
        md:"14px",
        lg:"16px",
        xl:"32px",
        base:"15px",
      }
    },
  },
  plugins: [],
}