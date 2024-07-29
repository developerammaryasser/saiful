/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '2rem',
          lg: '2rem',
          xl: '3rem',
          '2xl': '4rem',
        },
      },
      colors: {
        // Body Colors
        "primaryColor": "#0F0715",
        "secondaryColor": "#050709",
        "tertiaryColor": "#0B0B14",
        "violetColor": "#7B49E3",
        // Text Colors
        "textColor1": "#ffffff",
        "textColor2": "#7143CD",
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        lg: '1.15rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      }
    },
  },
  plugins: [],
}