import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import tw, { theme } from 'twin.macro';

const StyledImageX = styled.div`
  ${tw`relative ml-auto flex items-center`}
  width: 100%;
  margin-top: 150px;
  @media screen and (min-width: ${theme('screens.md')}) {
    width: 25%;
    margin-top: 100px;
    margin-bottom: -100px;
  }
  div {
    ${tw`borderTopLeft styleImageRight absolute right-0 bg-gray-100`}
    width: 25%;
    height: 200px;
    @media screen and (min-width: ${theme('screens.xs')}) {
      height: 250px;
    }
    @media screen and (min-width: ${theme('screens.md')}) {
      height: 75%;
      width: 75%;
    }
    @media screen and (min-width: ${theme('screens.lg')}) {
      height: 100%;
      width: 75%;
    }
  }
  img {
    position: absolute;
    right: 0;
    width: 50%;
    @media screen and (min-width: ${theme('screens.xs')}) {
      width: 60%;
    }
    @media screen and (min-width: ${theme('screens.sm')}) {
      width: 50%;
      right: -5%;
    }
    @media screen and (min-width: ${theme('screens.md')}) {
      width: 150%;
      right: -45%;
    }
    @media screen and (min-width: ${theme('screens.lg')}) {
      width: 125%;
      right: -30%;
    }
    @media screen and (min-width: ${theme('screens.xl')}) {
      width: 100%;
      right: 25%;
    }
  }
`;

const StyledImage = ({ src }) => {
  return (
    <StyledImageX>
      <div />
      <img src={src} alt="high-five" />
    </StyledImageX>
  );
};

export default StyledImage;

StyledImage.propTypes = {
  src: PropTypes.string.isRequired,
};
