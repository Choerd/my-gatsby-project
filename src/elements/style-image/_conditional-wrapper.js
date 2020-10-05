import React from 'react';
import PropTypes from 'prop-types';

import { StyledImageRight, StyledImageLeft } from './styles';

export default function ConditionalWrapper({ condition, children, ...props }) {
  const { size, className, offset } = props;
  return condition ? (
    <StyledImageRight className={className} size={size} offset={offset}>
      {children}
    </StyledImageRight>
  ) : (
    <StyledImageLeft className={className} size={size} offset={offset}>
      {children}
    </StyledImageLeft>
  );
}

ConditionalWrapper.defaultProps = {
  className: null,
  offset: null,
};

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.shape().isRequired,
  size: PropTypes.string.isRequired,
  offset: PropTypes.string,
  className: PropTypes.string,
};
