/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigators/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        my_accent: "#FF8934",
        my_primary: "#252525",
        my_gray: "#EAEAEA",
        my_gray_dark: "#676767",
      },
    },
  },
  plugins: [],
};
