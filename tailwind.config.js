module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#FFDA5B",
        secondary: "#FE645A",
        bam: "#98ACFF",
        brownish: "#F1EFE3",
        light: "#F3F4F6",
        lightYellow: "#FFF2C8",
        star: "#FFC828",
        money: "#10a666",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
