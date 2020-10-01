import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'twin.macro';

import { baseStyling, fontFamily, fontSize } from './styles';

const StyledText = styled.div`
  ${baseStyling}
  ${({ weight, size }) => {
    return css`
      font-family: ${fontFamily(weight)};
      font-size: ${fontSize(size)};
    `;
  }}
`;

const Text = ({ weight = 'regular', size = 'regular', ...props }) => (
  <StyledText as weight={weight} size={size} {...props} />
);

export default Text;

Text.propTypes = {
  as: PropTypes.string,
  weight: PropTypes.string,
  size: PropTypes.string,
};

Text.defaultProps = {
  as: 'p',
  weight: 'regular',
  size: 'regular',
};
