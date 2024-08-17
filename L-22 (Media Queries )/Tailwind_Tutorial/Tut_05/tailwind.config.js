/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    // If i write in this , so we can use inbuild color functionality of colors

    // colors: {
    //   aakash: {
    //     // weight : color
    //     400: "#d97706",
    //     500: "blue",
    //   },
    // },
    extend: {
      // Which simply means , we extend some other things
      colors: {
        aakash: {
          // weight : color
          400: "#d97706",
          800: "blue",
        },
      },
    },
  },
  plugins: [],
};
