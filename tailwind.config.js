/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      first: "#a2798f",
      second: "#8caba8",
      third: "#ebdada",
      fourth: "#464545",
      white: "#ffff",
    },
  },
  plugins: [require("daisyui")],
};
