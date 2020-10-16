import React from 'react';
import PropTypes from 'prop-types';

import { StyledImageRight, StyledImageLeft } from './styles';

export default function ConditionalWrapper({ condition, children, ...props }) {
  const { size, className } = props;
  return condition ? (
    <StyledImageRight className={className} size={size}>
      {children}
    </StyledImageRight>
  ) : (
    <StyledImageLeft className={className} size={size}>
      {children}
    </StyledImageLeft>
  );
}

ConditionalWrapper.defaultProps = {
  className: null,
};

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.shape().isRequired,
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
};
