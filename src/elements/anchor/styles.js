import tw, { css } from 'twin.macro';

export const StyledBase = () => {
  return css`
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-variant: normal;
    ${tw`font-source-sans-pro-semi-bold uppercase text-black`}
  `;
};

export const StyledPrimary = () => {
  return css`
    ${tw`inline-block py-4 px-8 borderTopRight gradient-dark`}
    :hover {
      background-position: bottom;
    }
  `;
};

export const StyledSecondary = () => {
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

export const StyledTertiary = () => {
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

export const StyledQuaternary = () => {
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
