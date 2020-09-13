module.exports = {
  theme: {
    colors: {
        red: '#ff0000'
     },
    extend: {
      fontFamily: { }
    },
    fontSize: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    zIndex: {
      '-1': -1,
      '0': 0,
      '1': 1
    }
  },
  plugins: [
      function({ addComponents}) {
          addComponents({
              '.container': {
                  maxWidth: '95%',
                  '@screen lg': {
                      width: '85%',
                      maxWidth: '1340px'
                  }
              }
          })
      }
  ],
}