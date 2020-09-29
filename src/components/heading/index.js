import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const StyledHeading = styled.div`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-variant: normal;
  font-family: ${props => {
    switch (props.as) {
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
  }};
  font-size: ${props => {
    switch (props.as) {
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
  }};
  line-height: 1;
`;

const Heading = ({ as = 'h1', ...props }) => (
  <StyledHeading as={as} {...props} />
);

export default Heading;

Heading.propTypes = {
  as: PropTypes.string.isRequired,
};
