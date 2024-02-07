/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        '12': '12px', // Add a custom border width
        '16': '16px', // Add another custom border width
        '36': '36px',
        // You can add more custom thicknesses as needed
      },
      fontSize: {
        'xxs': '10px', // Add a custom text size smaller than text-xs
      },
    },
  },
  plugins: [],
};
