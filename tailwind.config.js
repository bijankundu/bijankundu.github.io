module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        pattern: "url('images/cream_pixels.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
