module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
      logo: ["Heebo", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        gray1: "#333",
        gray2: "#4f4f4f",
        gray3: "#828282",
        gray4: "#BDBDBD",
        gray5: "#E0E0E0",
        gray6: "#F2F2F2",
        blue: "#2D9CDB",
        green: "#27AE60",
        red: "#EB5757",
        white: "#FFF",
        footer: "#100E1D",
      },
    },
  },
  plugins: [],
};
