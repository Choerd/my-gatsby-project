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
          100: '#e0e0e0',
          200: '#bdbdbd',
          300: '#9e9e9e',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#212121',
        },
      },
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
      margin: {
        '20': '20px'
      },
      inset: {
        15: '15%',
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
        3: '3px',
        5: '5px',
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      const containers = {
        '.container': {
          position: 'relative',
          margin: '0 auto',
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
          },
          '@screen xl': {
            paddingLeft: '0px',
            paddingRight: '0px',
            maxWidth: theme('screens.xl'),
          },
        }
      };
      const styleImage = {
        '.styleImageLeft': {
          '@screen xs': {
            marginLeft: '-25px',
          },
          '@screen sm': {
            marginLeft: '-50px',
          },
          '@screen md': {
            marginLeft: '-75px',
          },
          '@screen lg': {
            marginLeft: '-100px',
          },
          '@screen xl': {
            marginLeft: '0px',
          },
        },
        '.styleImageRight': {
          '@screen xs': {
            marginRight: '-25px',
          },
          '@screen sm': {
            marginRight: '-50px',
          },
          '@screen md': {
            marginRight: '-75px',
          },
          '@screen lg': {
            marginRight: '-100px',
          },
          '@screen xl': {
            marginRight: '0px',
          },
        }
      };
      const gradients = {
        '.gradient-extra-light': {
          backgroundImage: `linear-gradient(to top, ${theme('colors.gray.100')} 50%, transparent 50%)`,
          backgroundSize: '100% 200%',
          backgroundPosition: 'top',
          transition: 'background-position 0.1s ease-in-out',
        },
        '.gradient-light': {
          backgroundImage: `linear-gradient(to top, ${theme('colors.gray.200')} 50%, ${theme('colors.gray.100')} 50%)`,
          backgroundSize: '100% 200%',
          backgroundPosition: 'top',
          transition: 'background-position 0.1s ease-in-out',
        },
        '.gradient-dark': {
          backgroundImage: `linear-gradient(to top, ${theme('colors.gray.300')} 50%, ${theme('colors.gray.200')} 50%)`,
          backgroundSize: '100% 200%',
          backgroundPosition: 'top',
          transition: 'background-position 0.1s ease-in-out',
        },
      };
      const borders = {
        '.borderTopLeft': {
          borderRadius: '0px 12px 12px 12px',
        },
        '.borderTopRight': {
          borderRadius: '12px 0px 12px 12px',
        },
        '.borderBottomRight': {
          borderRadius: '12px 12px 0px 12px',
        },
        '.borderBottomLeft': {
          borderRadius: '12px 12px 12px 0px',
        },
      };

      addComponents(containers);
      addComponents(styleImage);
      addComponents(gradients);
      addComponents(borders);
    },
  ],
  corePlugins: {
    container: false,
  }
};
