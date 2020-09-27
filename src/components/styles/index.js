import tw, { css } from 'twin.macro';

export const spaceLarge = `100px`;
export const spaceRegular = `75px`;
export const spaceSmall = `50px`;
export const spaceExtraSmall = `25px`;
export const borderRadius = tw`rounded-sm`;

export const whiteSpace = css`
  padding-left: ${spaceLarge};
  padding-right: ${spaceLarge};
  @media screen and (max-width: 768px) {
    padding-left: ${spaceRegular};
    padding-right: ${spaceRegular};
  }
  @media screen and (max-width: 640px) {
    padding-left: ${spaceSmall};
    padding-right: ${spaceSmall};
  }
  @media screen and (max-width: 360px) {
    padding-left: ${spaceExtraSmall};
    padding-right: ${spaceExtraSmall};
  }
`;

export const borderTopLeft = size => css`
  ${size}
  border-top-left-radius: 0px;
`;

export const borderTopRight = size => css`
  ${size}
  border-top-right-radius: 0px;
`;

export const borderBottomRight = size => css`
  ${size}
  border-bottom-right-radius: 0px;
`;

export const borderBottomLeft = size => css`
  ${size}
  border-bottom-left-radius: 0px;
`;
