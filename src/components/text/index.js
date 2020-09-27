import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'twin.macro';

const fontFamily = weight => {
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

const fontSize = size => {
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

const baseStyling = () => {
  return css`
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-variant: normal;
  `;
};

const TextStyle = styled.div`
  ${baseStyling}
  ${props => {
    return css`
      font-family: ${fontFamily(props.weight)};
      font-size: ${fontSize(props.size)};
    `;
  }}
`;

const Text = ({ as = 'p', weight = 'regular', size = 'regular', ...props }) => (
  <TextStyle as={as} weight={weight} size={size} {...props} />
);

Text.propTypes = {
  as: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Text;
