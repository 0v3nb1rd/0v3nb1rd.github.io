module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        akaya: ["Akaya Telivigala", "cursive"],
      },
      colors: {
        sky: "#30aade",
        ylw: "F4D500",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#a3bf27",
          secondary: "#30aade",
          warning: "rgb(253, 224, 71)",
          danger: "#EE9FA7",
          // "primary-focus": "mediumblue",
        },
      },
    ],
  },
}
