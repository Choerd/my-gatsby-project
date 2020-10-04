import { css, theme } from 'twin.macro';

export const baseStyling = () => {
  return css`
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-variant: normal;
    line-height: 1;
  `;
};

export const fontFamily = as => {
  switch (as) {
    case 'h1':
      return 'Source Sans Pro Bold;';
    case 'h2':
      return 'Source Sans Pro Bold;';
    case 'h3':
      return 'Source Sans Pro Bold;';
    case 'h4':
      return 'Open Sans Bold;';
    case 'h5':
      return 'Open Sans Bold;';
    case 'h6':
      return 'Open Sans Bold;';
    default:
      return 'Source Sans Pro Bold;';
  }
};

export const fontSize = as => {
  return css`
    font-size: ${fontSizeSmall(as)};
    @media screen and (min-width: ${theme('screens.md')}) {
      font-size: ${fontSizeLarge(as)};
    }
  `;
};

const fontSizeLarge = as => {
  switch (as) {
    case 'h1':
      return '72px;';
    case 'h2':
      return '48px;';
    case 'h3':
      return '40px;';
    case 'h4':
      return '32px;';
    case 'h5':
      return '28px;';
    case 'h6':
      return '24px';
    default:
      return '72px;';
  }
};

const fontSizeSmall = as => {
  switch (as) {
    case 'h1':
      return '48px;';
    case 'h2':
      return '40px;';
    case 'h3':
      return '32px;';
    case 'h4':
      return '28px;';
    case 'h5':
      return '24px;';
    case 'h6':
      return '20px';
    default:
      return '72px;';
  }
};
