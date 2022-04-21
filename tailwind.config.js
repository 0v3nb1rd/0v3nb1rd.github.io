module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        akaya: ['Akaya Telivigala', 'cursive'],
      },
      spacing: {
        130: '32rem',
      },
      colors: {
        sky: 'rgba(48, 170, 222, 1)',
        sky100: 'rgba(48, 170, 222, 0.8)',
        ylw: '#F4D500',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#a3bf27',
          secondary: '#30aade',
          warning: 'rgb(253, 224, 71)',
          danger: '#EE9FA7',
          // "primary-focus": "mediumblue",
        },
      },
    ],
  },
}
