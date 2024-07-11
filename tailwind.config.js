

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        primary: '#f97316'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

