import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import tw, { css } from 'twin.macro';

const StyledBase = () => {
  return css`
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-variant: normal;
    ${tw`font-source-sans-pro-semi-bold uppercase`}
  `;
};

const StyledPrimary = () => {
  return css`
    ${tw`inline-block py-4 px-8 borderTopRight gradient-dark`}
    :hover {
      background-position: bottom;
    }
  `;
};

const StyledSecondary = () => {
  return css`
    span {
      ${tw`gradient-extra-light`}
    }
    :after {
      ${tw`inline-block ml-4`}
      content: '';
      border-top: 6px solid transparent;
      border-left: 9px solid black;
      border-bottom: 6px solid transparent;
    }
    :hover {
      span {
        background-position: bottom;
      }
    }
  `;
};

const StyledTertiary = () => {
  return css`
    ${tw`font-source-sans-pro-bold normal-case`}
    span {
      ${tw`gradient-light`}
    }
    :hover {
      span {
        background-position: bottom;
      }
    }
  `;
};

const StyledQuaternary = () => {
  return css`
    ${tw`font-open-sans-regular text-sm`}
    span {
      ${tw`gradient-light`}
    }
    :hover {
      span {
        background-position: bottom;
      }
    }
  `;
};

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
