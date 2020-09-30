import React from 'react';
import { Link } from 'gatsby';
import tw, { css } from 'twin.macro';

import Text from 'components/text';
import Anchor from 'components/anchor';

const navigationStyle = css`
  ${tw`container`}
  .nav-items {
    ${tw`flex items-center`}
    li:not(:last-of-type) {
      padding-right: 2rem;
    }
  }
`;

const Navigation = () => {
  return (
    <nav css={navigationStyle} className="flex justify-between">
      <ul>
        <li className="py-2">
          <Link to="/">
            <Text weight="bold" size="large">
              Logo
            </Text>
          </Link>
        </li>
      </ul>

      <ul className="nav-items">
        <li>
          <Anchor to="/blog/" type="tertiary">
            Blog
          </Anchor>
        </li>
        <li>
          <Anchor to="/about/" type="tertiary">
            About
          </Anchor>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
