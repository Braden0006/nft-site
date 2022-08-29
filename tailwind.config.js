/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#010233',
        'lightpurple': '#8D8DDB',
        'lighterpurple': '#2c3166'
      },

    width: {
      '10vw': '10vw',
      '20vw': '20vw',
      '30vw': '30vw',
      '40vw': '40vw',
      '50vw': '50vw',
      '60vw': '60vw',
      '70vw': '70vw',
      '80vw': '80vw',
      '90vw': '90vw',
    },

    fontFamily: {
      'outfit': ['Outfit', 'sans-serif'],
    }
    },
  },
  plugins: [],
}
