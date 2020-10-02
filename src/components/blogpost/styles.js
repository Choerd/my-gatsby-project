import styled from '@emotion/styled';
import tw, { theme, css } from 'twin.macro';

export const StyledBlogList = styled.li`
  ${tw`relative flex flex-col mb-8 w-full sm:w-2/5 lg:w-3/10`}
  .blogpost-content {
    order: 2;
    ${tw`p-4 text-black bg-gray-100 borderBottomLeft`}
    padding-top: 36px;
    .title {
      ${tw`uppercase`}
    }
    .tags {
      ${tw`flex flex-wrap my-3`}
      li {
        ${tw`px-4 py-2 mr-2 mt-2 border-3 border-gray-300 borderTopRight`}
      }
    }
    .excerpt {
      ${tw`mb-6`}
    }
  }
  .blogpost-image {
    order: 1;
    ${tw`w-2/3 absolute borderTopRight`}
    top: 20px;
    left: -20px;
  }
`;

const centerStyle = () => {
  return css`
    @media screen and (max-width: ${theme('screens.sm')}) {
      width: calc(100% - 20px);
      margin-left: auto;
    }
  `;
};
export const StyledBlogArticle = styled.article`
  ${centerStyle}
  ${tw`relative flex flex-col w-full md:ml-auto`}
  @media screen and (min-width: ${theme(
    'screens.lg'
  )}) {
    width: 75%;
  }
  @media screen and (min-width: ${theme('screens.xl')}) {
    width: 50%;
  }

  .blogpost-content {
    order: 2;
    ${tw`p-4 md:p-8 text-black bg-gray-100 borderBottomLeft md:flex md:flex-wrap`}
    padding-top: 36px;
    .title {
      ${tw`uppercase`}
    }
    .tags {
      ${tw`flex flex-wrap my-3 md:w-1/2 order-2`}
      li {
        ${tw`px-4 py-2 mr-2 border-3 border-gray-300 self-start borderTopRight`}
      }
    }
    .excerpt {
      ${tw`mb-6 md:my-3 md:pr-4 md:w-1/2 md:inline-block order-1`}
    }
    a {
      ${tw`self-start order-3`}
    }
  }
  .blogpost-image {
    ${tw`w-2/3 borderTopRight`}
    order: 1;
    top: 20px;
    left: -20px;
    @media screen and (min-width: ${theme('screens.md')}) {
      position: absolute !important;
      order: 2;
      top: unset;
      left: unset;
      bottom: -20px;
      right: -20px;
      width: calc(50% + 20px);
      height: calc(50% + 20px);
    }
  }
`;
