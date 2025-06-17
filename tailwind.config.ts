// import konstaConfig config
import konstaConfig from 'konsta/config';

// wrap config with konstaConfig config
module.exports = konstaConfig({
  konsta: {
    colors: {
      // "primary" is the main app color, if not specified will be default to '#007aff'
      primary: '#d40000'
    }
  },
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        // auto generated colors
        'primary': 'rgb(var(--k-color-primary) / <alpha-value>)',
        'md-light-primary': 'rgb(var(--k-color-md-light-primary) / <alpha-value>)',
        'md-light-on-primary': 'rgb(var(--k-color-md-light-on-primary) / <alpha-value>)',
        'md-light-primary-container': 'rgb(var(--k-color-md-light-primary-container) / <alpha-value>)',
        'md-light-on-primary-container': 'rgb(var(--k-color-md-light-on-primary-container) / <alpha-value>)',
        'md-light-secondary': 'rgb(var(--k-color-md-light-secondary) / <alpha-value>)',
        'md-light-on-secondary': 'rgb(var(--k-color-md-light-on-secondary) / <alpha-value>)',
        'md-light-secondary-container': 'rgb(var(--k-color-md-light-secondary-container) / <alpha-value>)',
        'md-light-on-secondary-container': 'rgb(var(--k-color-md-light-on-secondary-container) / <alpha-value>)',
        'md-light-surface': 'rgb(var(--k-color-md-light-surface) / <alpha-value>)',
        'md-light-on-surface': 'rgb(var(--k-color-md-light-on-surface) / <alpha-value>)',
        'md-light-surface-variant': 'rgb(var(--k-color-md-light-surface-variant) / <alpha-value>)',
        'md-light-on-surface-variant': 'rgb(var(--k-color-md-light-on-surface-variant) / <alpha-value>)',
        'md-light-outline': 'rgb(var(--k-color-md-light-outline) / <alpha-value>)',
        'md-light-outline-variant': 'rgb(var(--k-color-md-light-outline-variant) / <alpha-value>)',
        'md-light-surface-1': 'rgb(var(--k-color-md-light-surface-1) / <alpha-value>)',
        'md-light-surface-2': 'rgb(var(--k-color-md-light-surface-2) / <alpha-value>)',
        'md-light-surface-3': 'rgb(var(--k-color-md-light-surface-3) / <alpha-value>)',
        'md-light-surface-4': 'rgb(var(--k-color-md-light-surface-4) / <alpha-value>)',
        'md-light-surface-5': 'rgb(var(--k-color-md-light-surface-5) / <alpha-value>)',
        'md-dark-primary': 'rgb(var(--k-color-md-dark-primary) / <alpha-value>)',
        'md-dark-on-primary': 'rgb(var(--k-color-md-dark-on-primary) / <alpha-value>)',
        'md-dark-primary-container': 'rgb(var(--k-color-md-dark-primary-container) / <alpha-value>)',
        'md-dark-on-primary-container': 'rgb(var(--k-color-md-dark-on-primary-container) / <alpha-value>)',
        'md-dark-secondary': 'rgb(var(--k-color-md-dark-secondary) / <alpha-value>)',
        'md-dark-on-secondary': 'rgb(var(--k-color-md-dark-on-secondary) / <alpha-value>)',
        'md-dark-secondary-container': 'rgb(var(--k-color-md-dark-secondary-container) / <alpha-value>)',
        'md-dark-on-secondary-container': 'rgb(var(--k-color-md-dark-on-secondary-container) / <alpha-value>)',
        'md-dark-surface': 'rgb(var(--k-color-md-dark-surface) / <alpha-value>)',
        'md-dark-on-surface': 'rgb(var(--k-color-md-dark-on-surface) / <alpha-value>)',
        'md-dark-surface-variant': 'rgb(var(--k-color-md-dark-surface-variant) / <alpha-value>)',
        'md-dark-on-surface-variant': 'rgb(var(--k-color-md-dark-on-surface-variant) / <alpha-value>)',
        'md-dark-outline': 'rgb(var(--k-color-md-dark-outline) / <alpha-value>)',
        'md-dark-outline-variant': 'rgb(var(--k-color-md-dark-outline-variant) / <alpha-value>)',
        'md-dark-surface-1': 'rgb(var(--k-color-md-dark-surface-1) / <alpha-value>)',
        'md-dark-surface-2': 'rgb(var(--k-color-md-dark-surface-2) / <alpha-value>)',
        'md-dark-surface-3': 'rgb(var(--k-color-md-dark-surface-3) / <alpha-value>)',
        'md-dark-surface-4': 'rgb(var(--k-color-md-dark-surface-4) / <alpha-value>)',
        'md-dark-surface-5': 'rgb(var(--k-color-md-dark-surface-5) / <alpha-value>)',
        'ios-primary': 'rgb(var(--k-color-ios-primary) / <alpha-value>)',
        'ios-primary-tint': 'rgb(var(--k-color-ios-primary-tint) / <alpha-value>)',
        'ios-primary-shade': 'rgb(var(--k-color-ios-primary-shade) / <alpha-value>)',
        'ios-light-surface': '#FFFFFF',
        'ios-dark-surface': '#000',
        'ios-light-surface-1': '#fff',
        'ios-dark-surface-1': '#1c1c1d',
        'ios-light-surface-2': '#f7f7f8',
        'ios-dark-surface-2': '#121212',
        'ios-light-surface-3': '#fff',
        'ios-dark-surface-3': '#1c1c1d',
        'ios-light-surface-variant': '#f4f4f4',
        'ios-dark-surface-variant': '#232323',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwind-scrollbar-hide')
  ],
});