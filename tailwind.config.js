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
      gridTemplateColumns: {
        HomeIntroSearch: "1fr 0.1fr 1fr 0.5fr",
        HomeSlider: `repeat(auto-fill, minmax(100px, 1fr))`,
      },
    },
  },
  plugins: [],
};
