/** @type {import('tailwindcss').Config} */
module.exports = {
  // This type of tailwind configuration , is just for single type of file
  content: ["./dist/*.html"],

  // This tailwind configuration for more than 2 types of files
  // content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
