/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Caveat', 'cursive'],
        // cedarville: ["Cedarville Cursive", ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
        // nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
        protest: ["Protest Revolution", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xxl': '2.5rem', // Custom size example
        'giant': '4rem',
      },
      
      screens: {
        'galaxy-tab-s7': '800px',
        'galaxy-tab-s7-landscape': '1280px',
      },
    },
  },
  plugins: [],
};
