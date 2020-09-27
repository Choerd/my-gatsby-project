import React from 'react';
import tw, { css } from 'twin.macro';

import {
  borderTopRight,
  borderBottomRight,
  borderBottomLeft,
} from '../styles/index';

import Heading from '../heading';
import Text from '../text';

import Github from '../../assets/svg/icon-github.svg';
import Instagram from '../../assets/svg/icon-instagram.svg';
import Linkedin from '../../assets/svg/icon-linkedin.svg';

const footerStyle = css`
  ${tw`flex flex-col flex-wrap sm:flex-row justify-between bg-gray-100 text-black px-8 pt-10 pb-8`}
  & > div {
    ${tw`w-full mb-12 sm:w-1/2 lg:mb-0 lg:w-1/4`}
    &:not(:last-of-type) {
      ${tw`sm:pr-8`}
    }
    h5 {
      ${tw`mb-6 uppercase`}
    }
    p:not(:last-of-type) {
      ${tw`mb-4`}
    }
    ul li {
      ${tw`mb-4 uppercase`}
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
    .colored-block {
      ${tw`bg-gray-200 absolute`}
      ${borderBottomLeft(tw`rounded-sm`)}
      top: -6em;
      right: -2em;
      width: 8em;
      height: 20em;
    }
    .image {
      ${tw`absolute`}
      top: -1.5em;
      right: -4em;
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

      <div className="relative">
        <div className="colored-block" />
        <Github className="image w-48 h-48" />
      </div>
    </div>
  );
};

export default Footer;
