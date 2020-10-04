import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from 'twin.macro';

import { baseStyling, fontFamily, fontSize } from './styles';

const StyledHeading = styled.div`
  ${baseStyling}
  ${({ as }) => {
    return css`
      font-family: ${fontFamily(as)};
      ${fontSize(as)}
    `;
  }}
`;

const Heading = ({ as = 'h1', ...props }) => (
  <StyledHeading as={as} {...props} />
);

export default Heading;

Heading.propTypes = {
  as: PropTypes.string.isRequired,
};
