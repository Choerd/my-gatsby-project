module.exports = {
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'light-black': '#17171d',
    },
    extend: {
      fontFamily: {
        'open-sans-bold': 'Open Sans Bold',
        roboto: 'Roboto',
      },
      fontSize: {
        xxs: '8px',
        xs: '10px',
        s: '12px',
        m: '14px',
        xm: '18px',
        l: '24px',
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
    },
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.container': {
          maxWidth: '95%',
          '@screen lg': {
            width: '85%',
            maxWidth: '1340px',
          },
        },
      });
    },
  ],
};
