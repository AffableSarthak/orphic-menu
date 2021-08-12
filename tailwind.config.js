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
  plugins: [require('@tailwindcss/forms')],
};
