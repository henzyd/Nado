/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      borderColor: {
        NavBar: "#0000004D",
      },
      backgroundColor: {
        Button: "#B6B6B6",
        HomeIntro: "#949494",
      },
    },
  },
  plugins: [],
};
