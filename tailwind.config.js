module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FFC914",
        secondary: "#FF8100",
        dark: "#302F3C",
        smokyBlack: "#3D3D3D",
        whiteColor: "#F8F8FA",
        categoriesCardsColor: "#F5D4C1",
        gradientColor: "#FFF4E8",
        button: "#FF8100",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      fontFamily: {
        description: ["Mulish"],
      },
      flex: {
        two: "1 0 20%",
        three: "1 0 30%",
        four: "0 0 40%",
        five: "1 0 50%",
        six: "1 0 60%",
        seven: "1 0 70%",
        eight: "1 0 80%",
        nine: "1 0 90%",
      },
      backgroundImage: (theme) => ({
        menu: "url('/menuImages/pizzaBg.jpg ')",
      }),
    },
  },
  variants: {
    extend: {
      background: ["active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
