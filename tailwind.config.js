module.exports = {
  purge: ["./public/*.html", "./src/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        block: "0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
      },
      colors: {
        primary: "hsl(180, 29%, 50%)",
        attribution: "hsl(228, 45%, 44%)",
        neutral: {
          100: "hsl(180, 52%, 96%)",
          200: "hsl(180, 31%, 95%)",
          300: "hsl(180, 8%, 52%)",
          400: "hsl(180, 14%, 20%)",
        },
      },
      fontFamily: {
        body: ["Spartan"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
