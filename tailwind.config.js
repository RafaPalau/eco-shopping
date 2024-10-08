/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbar-light-orange": "#FFDD57",
        "eco-green": "#2C6E49",
        "shop-orange": "#FF8C00",
        'eco-blue': '#00A6ED',
      },
    },
  },
  plugins: [],
};
