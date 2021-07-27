module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      //primary: "#FF7859",
      primary: "#FF3B78",
      //secondary: "#F3DDD7",
      secondary: "#FFE2EB",
      bam: "#98ACFF",
      light: "#FFAAC9",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
