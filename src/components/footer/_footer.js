import React from 'react';
import tw, { css } from 'twin.macro';

import {
  whiteSpace,
  borderTopRight,
  borderBottomRight,
  borderBottomLeft,
  spaceLarge,
  spaceRegular,
  spaceSmall,
  spaceExtraSmall,
} from '../styles';

import Heading from '../heading';
import Text from '../text';

import Github from '../../assets/svg/icon-github.svg';
import Instagram from '../../assets/svg/icon-instagram.svg';
import Linkedin from '../../assets/svg/icon-linkedin.svg';
import highFive from '../../assets/images/high-five.png';

const footerStyle = css`
  ${whiteSpace}
  ${tw`flex flex-col flex-wrap sm:flex-row justify-between bg-gray-100 text-black pt-10 pb-8`}
  border-top-left-radius: 12px;
  & > div {
    ${tw`w-full sm:w-1/2 lg:w-1/4`}
    &:not(:last-of-type) {
      ${tw`mb-12 lg:mb-0`}
    }
    &:nth-of-type(3),
    :nth-of-type(4) {
      ${tw`sm:mb-0`}
    }
    h5 {
      ${tw`mb-6 uppercase`}
    }
    p:not(:last-of-type) {
      ${tw`mb-4`}
    }
    ul li {
      ${tw`uppercase`}
      &:not(:last-of-type) {
        ${tw`mb-4`}
      }
      div {
        ${tw`flex items-center`}
      }
    }
    form {
      ${borderTopRight(tw`rounded-lg`)}
      ${tw`bg-gray-200 p-1 flex mt-4`}
      max-width: 325px;
      .input-text {
        ${borderBottomRight(tw`rounded-sm`)}
        ${tw`pl-2 flex-grow w-0`}
      }
      .input-submit {
        ${tw`px-4 py-2 bg-transparent uppercase font-source-sans-pro-semi-bold`}
      }
    }
  }
  .happy-image {
    ${tw`relative mb-0 sm:mb-12`}
    div {
      ${tw`bg-gray-200 absolute`}
      ${borderBottomLeft(tw`rounded-sm`)}
      top: -6em;
      right: -${spaceLarge};
      width: 8em;
      height: 20em;
      @media screen and (max-width: 1024px) {
        top: -2em;
        right: -${spaceLarge};
        width: 6em;
        height: 15em;
      }
      @media screen and (max-width: 640px) {
        top: 0;
        right: -${spaceSmall};
        width: 6em;
        height: 100%;
      }
      @media screen and (max-width: 360px) {
        right: -${spaceExtraSmall};
      }
    }
    img {
      position: absolute;
      top: -4em;
      right: -${spaceRegular};
      max-height: 300px;
      @media screen and (max-width: 1024px) {
        right: -${spaceLarge};
      }
      @media screen and (max-width: 640px) {
        height: 120%;
        top: -10%;
        right: -${spaceSmall};
      }
    }
    @media screen and (max-width: 640px) {
      height: 10em;
    }
  }
`;

const Footer = () => {
  return (
    <div css={footerStyle}>
      <div>
        <Heading as="h5">Explore</Heading>
        <ul>
          <li>
            <Text weight="regular" size="regular">
              Home
            </Text>
          </li>
          <li>
            <Text weight="regular" size="regular">
              Blog
            </Text>
          </li>
          <li>
            <Text weight="regular" size="regular">
              About
            </Text>
          </li>
        </ul>
      </div>

      <div>
        <Heading as="h5">Socials</Heading>
        <ul>
          <li>
            <div>
              <Github className="w-6 h-6 mr-3" />
              <Text as="span" weight="regular" size="regular">
                devsjors
              </Text>
            </div>
          </li>
          <li>
            <div>
              <Linkedin className="w-6 h-6 mr-3" />
              <Text as="span" weight="regular" size="regular">
                Sjors Eveleens
              </Text>
            </div>
          </li>
          <li>
            <div>
              <Instagram className="w-6 h-6 mr-3" />
              <Text as="span" weight="regular" size="regular">
                sjorseveleens
              </Text>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <Heading as="h5">Project together</Heading>
        <Text weight="regular" size="regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitat...
        </Text>
        <form>
          <input className="input-text" type="text" />
          <input className="input-submit" type="submit" value="send" />
        </form>
      </div>

      <div className="happy-image">
        <div className="colored-block" />
        <img src={highFive} alt="high-five" />
      </div>
    </div>
  );
};

export default Footer;
