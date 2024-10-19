/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        // Define your color scheme here
        background: {
          DEFAULT: 'rgba(var(--background))',
          dark: 'rgba(var(--background))',
        },
        text: {
          DEFAULT: 'rgba(var(--text))',
          dark: 'rgba(var(--text))',
        },
        "background-inverse": {
          DEFAULT: 'rgba(var(--background-inverse))',
          dark: 'rgba(var(--background-inverse))',
        },
        "accent": 'rgba(var(--accent))'
      },
    },
  },
  plugins: [],
};
