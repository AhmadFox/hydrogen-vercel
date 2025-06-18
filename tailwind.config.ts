// import konstaConfig config
import konstaConfig from 'konsta/config';

// wrap config with konstaConfig config
module.exports = konstaConfig({
  // prefix: 'tw-',
  konsta: {
  },
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {},
  },
  variants: {
    extend: {

    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwind-scrollbar-hide')
  ],
});