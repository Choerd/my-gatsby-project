import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import {
  StyledBase,
  StyledPrimary,
  StyledSecondary,
  StyledTertiary,
  StyledQuaternary,
} from './styles';

const StyledAnchor = styled(Link)`
  ${StyledBase}
  ${props => {
    switch (props.type) {
      case 'primary':
        return StyledPrimary;
      case 'secondary':
        return StyledSecondary;
      case 'tertiary':
        return StyledTertiary;
      case 'quaternary':
        return StyledQuaternary;
      default:
        return StyledPrimary;
    }
  }}
`;

const Anchor = ({ type = 'primary', ...props }) => {
  const { children } = props;
  return (
    <StyledAnchor type={type} {...props}>
      <span>{children}</span>
    </StyledAnchor>
  );
};

export default Anchor;

Anchor.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
