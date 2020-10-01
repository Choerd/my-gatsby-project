import styled from '@emotion/styled';
import tw from 'twin.macro';

export const BlogStyle = styled.li`
  ${tw`relative mb-8 w-full sm:w-2/5 lg:w-3/10`}
  .featured-image {
    ${tw`w-2/3 absolute borderTopRight`}
    top: 20px;
    left: -20px;
  }
  .content {
    ${tw`p-4 gradient-light text-black borderBottomLeft`}
    &:hover {
      background-position: bottom;
    }
    padding-top: 36px;
    .title {
      ${tw`mb-3 uppercase`}
    }
    .tags {
      ${tw`flex flex-wrap`}
      li {
        ${tw`px-4 py-2 mr-2 mt-2 border-3 border-gray-300 borderTopRight`}
      }
    }
    .excerpt {
      ${tw`mb-8`}
    }
    .anchor {
      ${tw`inline-block bg-gray-200 py-3 px-6 text-black uppercase borderTopRight`}
    }
  }
`;

export const sjors = () => {};
