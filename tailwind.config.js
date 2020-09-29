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
      gradients: theme => ({
        'gray': ['to top', `${theme('colors.gray.300')} 50%`, 'transparent 50%'],
        'test': ['to top', `${theme('colors.gray.300')} 50%`, `${theme('colors.gray.200')} 50%`],
      }),
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      spacing: {
        '3/10': '30%',
      },
      inset: {
        50: '50%',
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
      },
      borderRadius: {
        default: '12px',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
    },
  },
  plugins: [
    require('tailwindcss-plugins/gradients'),
    function({addComponents}) {
      addComponents({
        '.borderTopLeft': {
          borderRadius: '0px 12px 12px 12px'
        },
        '.borderTopRight': {
          borderRadius: '12px 0px 12px 12px'
        },
        '.borderBottomRight': {
          borderRadius: '12px 12px 0px 12px'
        },
        '.borderBottomLeft': {
          borderRadius: '12px 12px 12px 0px'
        },
        '.whiteSpace': {
          '@screen xs': {
            paddingLeft: '25px',
            paddingRight: '25px',
          },
          '@screen sm': {
            paddingLeft: '50px',
            paddingRight: '50px',
          },
          '@screen md': {
            paddingLeft: '75px',
            paddingRight: '75px',
          },
          '@screen lg': {
            paddingLeft: '100px',
            paddingRight: '100px',
          }
        }
      })
    }
  ],
};
