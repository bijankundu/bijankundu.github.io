module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        pattern: "url('images/cream_pixels.png')",
        honey: "url('images/dark-honeycomb.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
