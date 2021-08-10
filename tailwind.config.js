module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF3B78",
        secondary: "#FFE2EB",
        bam: "#98ACFF",
        brownish: "#F1EFE3",
        light: "#FFAAC9",
        star: "#FFC828",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
