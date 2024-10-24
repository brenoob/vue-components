/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // plugins: [
  //   function({ addUtilities }) {
  //     addUtilities({
  //       '.transform-style-preserve-3d': {
  //         'transform-style': 'preserve-3d',
  //       },
  //       '.backface-hidden': {
  //         'backface-visibility': 'hidden',
  //       },
  //       '.rotate-y-180': {
  //         'transform': 'rotateY(180deg)',
  //       },
  //       '.shadow-text': {
  //         'text-shadow': '1px 1px 3px rgba(0, 0, 0, 0.5)',
  //       },
  //     })
  //   },
  // ],
}