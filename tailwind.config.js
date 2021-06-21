module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#44d62c',
        },
        black: {
          light: '#222',
          lighter: '#999',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
