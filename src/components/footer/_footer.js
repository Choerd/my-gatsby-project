import React from 'react';

import Heading from 'elements/heading';
import Text from 'elements/text';
import Anchor from 'elements/anchor';

import Github from 'svg/icon-github.svg';
import Instagram from 'svg/icon-instagram.svg';
import Linkedin from 'svg/icon-linkedin.svg';

const Footer = () => {
  return (
    <div className="footer-main container">
      <div className="footer-section mb-12 lg:mb-0">
        <Heading as="h5">Explore</Heading>
        <ul>
          <li className="mb-4">
            <Anchor to="/" type="quaternary">
              Home
            </Anchor>
          </li>
          <li className="mb-4">
            <Anchor to="/blog/" type="quaternary">
              Blog
            </Anchor>
          </li>
          <li>
            <Anchor to="/about/" type="quaternary">
              About
            </Anchor>
          </li>
        </ul>
      </div>

      <div className="footer-section mb-12 lg:mb-0">
        <Heading as="h5">Socials</Heading>
        <ul>
          <li className="mb-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/devsjors"
              className="secondary-animation"
            >
              <div>
                <Github className="w-6 h-6 mr-3" />
                <span className="gradient-light">devsjors</span>
              </div>
            </a>
          </li>
          <li className="mb-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sjors-eveleens-50327712b/"
              className="secondary-animation"
            >
              <div>
                <Linkedin className="w-6 h-6 mr-3" />
                <span className="gradient-light">Sjors Eveleens</span>
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/sjorseveleens/"
              className="secondary-animation"
            >
              <div>
                <Instagram className="w-6 h-6 mr-3" />
                <span className="gradient-light">sjorseveleens</span>
              </div>
            </a>
          </li>
        </ul>
      </div>

      {/* <div className="footer-section mb-12 sm:mb-0"> */}
      <div className="footer-section">
        <Heading as="h5">Project together</Heading>
        <Text weight="regular" size="regular" className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitat...
        </Text>
        <form className="borderTopRight">
          <input className="input-text borderBottomRight" type="text" />
          <input className="input-submit" type="submit" value="send" />
        </form>
      </div>

      {/* <div className="footer-section">Place image right here</div> */}
    </div>
  );
};

export default Footer;
