/** @type {import('tailwindcss').Config} */

// npx tailwindcss -i ./src/assets/styles/app.css -o ./src/assets/styles/output.css --watch
module.exports = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '680px',
        md: '800px'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.5rem',
          sm: '0',
          lg: '1rem',
          xl: '2rem',
          '2xl': '2rem',
        },
      },
      colors:{
        primary: '#1677ff'
      }
    },
  },
  plugins: [],
};
