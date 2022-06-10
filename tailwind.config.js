/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      first: "#083346",
      second: "#046C95",
      third: "#0196C1",
      white: "#ffff",
    },
  },
  plugins: [require("daisyui")],
};
