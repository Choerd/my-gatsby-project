import styled from '@emotion/styled';
import tw, { css, theme } from 'twin.macro';

export const StyledBase = size => {
  return css`
    ${tw`w-full sm:w-1/4 overflow-hidden sm:overflow-visible`}
    div {
      ${tw`bg-gray-100 w-1/4 sm:w-full relative`}
      ${size === 'large' ? tw`sm:w-full` : tw`sm:w-3/4`}
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

export const StyledImageRight = styled.div`
  ${({ size }) => StyledBase(size)}
  ${tw`ml-auto styleImageRight`}
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

export const StyledImageLeft = styled.div`
  ${({ size }) => StyledBase(size)}
  ${tw`mr-auto styleImageLeft`}
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
    ${tw`mr-auto`}
  }
  img {
    right: 0%;
    @media screen and (min-width: ${theme('screens.sm')}) {
      right: -25%;
    }
  }
`;
