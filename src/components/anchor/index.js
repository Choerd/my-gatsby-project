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
    ${tw`inline-block py-4 px-8 bg-test borderTopRight`}
    background-size: 100% 200%;
    background-position: top;
    transition: background-position 0.1s ease-in-out;
    :hover {
      background-position: bottom;
    }
  `;
};

const StyledSecondary = () => {
  return css`
    span {
      ${tw`bg-gray`}
      background-size: 100% 200%;
      background-position: top;
      transition: background-position 0.1s ease-in-out;
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

const StyledAnchor = styled(Link)`
  ${StyledBase}
  ${props => {
    switch (props.type) {
      case 'primary':
        return StyledPrimary;
      case 'secondary':
        return StyledSecondary;
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
