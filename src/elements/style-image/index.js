import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import tw, { css, theme } from 'twin.macro';

const StyledBase = () => {
  return css`
    ${tw`w-full sm:w-1/4 overflow-hidden sm:overflow-visible mt-0`}
    div {
      ${tw`bg-gray-100 w-1/4 sm:w-full relative`}
    }
    img {
      ${tw`py-8 relative`}
      max-width: 300%;
      @media screen and (min-width: ${theme('screens.xs')}) {
        max-width: 200%;
      }
      @media screen and (min-width: ${theme('screens.sm')}) {
        max-width: 150%;
      }
    }
  `;
};

const StyledImageX = styled.div`
  ${StyledBase}
  ${tw`ml-auto styleImageRight`}
  ${({ offset }) => {
    return css`
      @media screen and (min-width: ${theme('screens.sm')}) {
        margin-top: -${offset}px;
      }
      @media screen and (min-width: ${theme('screens.md')}) {
        margin-top: ${offset}px;
      }
    `;
  }}
  div {
    ${tw`ml-auto`}
  }
  img {
    left: -150%;
    @media screen and (min-width: ${theme('screens.xs')}) {
      left: -100%;
    }
    @media screen and (min-width: ${theme('screens.sm')}) {
      left: -75%;
    }
  }
`;

const StyledImage = ({ src, border, ...props }) => {
  return (
    <StyledImageX {...props}>
      <div className={border}>
        <img src={src} alt="high-five" />
      </div>
    </StyledImageX>
  );
};

export default StyledImage;

StyledImage.propTypes = {
  src: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
};
