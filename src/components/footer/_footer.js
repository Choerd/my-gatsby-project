import React from 'react';
import { Link } from 'gatsby';
import tw, { css } from 'twin.macro';

import Heading from 'components/heading';
import Text from 'components/text';

import Github from 'svg/icon-github.svg';
import Instagram from 'svg/icon-instagram.svg';
import Linkedin from 'svg/icon-linkedin.svg';
import highFive from 'images/high-five.png';

const footerStyle = css`
  ${tw`whiteSpace flex flex-col flex-wrap sm:flex-row justify-between bg-gray-100 text-black pt-10 pb-8`}
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
      ${tw`borderTopRight bg-gray-200 p-1 flex mt-4`}
      max-width: 325px;
      .input-text {
        ${tw`borderBottomRight pl-2 flex-grow w-0`}
      }
      .input-submit {
        ${tw`px-4 py-2 bg-transparent uppercase font-source-sans-pro-semi-bold`}
      }
    }
  }
  .happy-image {
    ${tw`relative mb-0 sm:mb-12`}
    div {
      ${tw`borderBottomLeft`}
      top: -6em;
      height: 20em;
      @media screen and (max-width: 1024px) {
        top: -2em;
        height: 15em;
      }
      @media screen and (max-width: 640px) {
        top: 0;
        height: 100%;
      }
    }
    img {
      position: absolute;
      top: -4em;
      right: -100px;
      max-height: 300px;
      @media screen and (max-width: 640px) {
        height: 120%;
        top: -10%;
        right: -50px;
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
            <Link to="/">
              <Text weight="regular" size="regular">
                Home
              </Text>
            </Link>
          </li>
          <li>
            <Link to="/blog/">
              <Text weight="regular" size="regular">
                Blog
              </Text>
            </Link>
          </li>
          <li>
            <Link to="/about/">
              <Text weight="regular" size="regular">
                About
              </Text>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Heading as="h5">Socials</Heading>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/devsjors"
            >
              <div>
                <Github className="w-6 h-6 mr-3" />
                <Text as="span" weight="regular" size="regular">
                  devsjors
                </Text>
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sjors-eveleens-50327712b/"
            >
              <div>
                <Linkedin className="w-6 h-6 mr-3" />
                <Text as="span" weight="regular" size="regular">
                  Sjors Eveleens
                </Text>
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/sjorseveleens/"
            >
              <div>
                <Instagram className="w-6 h-6 mr-3" />
                <Text as="span" weight="regular" size="regular">
                  sjorseveleens
                </Text>
              </div>
            </a>
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

      <div className="happy-image right small">
        <div className="colored-block" />
        <img src={highFive} alt="high-five" />
      </div>
    </div>
  );
};

export default Footer;
