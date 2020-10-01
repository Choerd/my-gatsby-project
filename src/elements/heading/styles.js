import { css } from 'twin.macro';

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
  switch (as) {
    case 'h1':
      return '72px;';
    case 'h2':
      return '64px;';
    case 'h3':
      return '48px;';
    case 'h4':
      return '24px;';
    case 'h5':
      return '20px;';
    case 'h6':
      return '16px';
    default:
      return '72px;';
  }
};
