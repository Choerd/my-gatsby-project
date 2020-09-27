module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'open-sans-regular': 'Open Sans Regular',
        'open-sans-bold': 'Open Sans Bold',
        'source-sans-pro-semi-bold': 'Source Sans Pro Semi Bold',
        'source-sans-pro-bold': 'Source Sans Pro Bold',
      },
      colors: {
        white: '#fffff0',
        black: '#424242',
        gray: {
          '100': '#e0e0e0',
          '200': '#bdbdbd',
          '300': '#9e9e9e',
          '400': '#757575',
          '500': '#616161',
          '600': '#424242',
          '700': '#212121',
        }
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      spacing: {
        '3/10': '30%',
      },
      zIndex: {
        '-1': '-1',
        1: 1,
        2: 2,
      },
      maxWidth: {
        '1/2': '50%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/3': '33.3%',
        '2/3': '66.6%',
        '4/8': '45%',
      },
      borderRadius: {
        'none': '0',
        'sm': '12px',
        'lg': '16px',
        default: '16px',
      },
    },
  },
  plugins: [],
};
