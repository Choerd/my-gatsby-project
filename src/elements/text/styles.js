import { css } from 'twin.macro';

export const baseStyling = () => {
  return css`
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-variant: normal;
  `;
};

export const fontFamily = weight => {
  switch (weight) {
    case 'regular':
      return 'Open Sans Regular';
    case 'semiBold':
      return 'Source Sans Pro Semi Bold';
    case 'bold':
      return 'Source Sans Pro Bold';
    default:
      return 'Open Sans Regular';
  }
};

export const fontSize = size => {
  switch (size) {
    case 'small':
      return '12px';
    case 'regular':
      return '14px';
    case 'large':
      return '16px';
    default:
      return '14px';
  }
};
