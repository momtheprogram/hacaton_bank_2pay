module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background": "url('./images/background.png')",
        "bankImage": "url('./images/bankImage.png')",
        "creditCard": "url('./images/creditCard.png')",
      },
      colors: {
        white: "#FFF",
        black: "#000",
        blue: {
          dark: "#1D2749",
          light: "#80D1FF",
          transparent: "rgba(146, 213, 251, 0.10)",
        },

        purple: {
          text: "#8D59E9",
          icon: "#8B79EE",
          primary: "rgba(134, 56, 229, 0.80)",
        },
        orange: "#F8A51B",
        violet: {
          dark: "#DA71FF",
          light: "rgba(139, 121, 238, 0.20)",
        },
        grey: {
          dark: "rgb(176, 134, 243, 0.08)",
          light: "rgb(176, 134, 243, 0.01)",
          background: "#F4F6F7",
        },
        gradient: {
          first: "#9A75BA",
          second: "#B59EC9",
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}