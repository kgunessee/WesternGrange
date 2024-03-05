/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "play-fair": ["Playfair Display", "serif"],
        "source-sans": ["Source Sans 3", "sans-serif"],
      },

      colors: {
        "dark-moss-green": "hsla(74, 32%, 32%, 1)",
        "dark-wood-green": "hsl(105,7%,11%)",
        cornsilk: "hsla(52, 94%, 94%, 1)",
        "earth-yellow": "hsla(32, 65%, 62%, 1)",
        "tigers-eye": "hsla(28, 67%, 44%, 1)",
      },
    },
  },
  plugins: [],
};
