import React from 'react';
import { Link } from 'gatsby';
import tw, { css } from 'twin.macro';

import Text from 'components/text';

const navigationStyle = css`
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
          <Link to="/blog/">
            <Text weight="bold" size="large">
              Blog
            </Text>
          </Link>
        </li>
        <li>
          <Link to="/about/">
            <Text weight="bold" size="large">
              About
            </Text>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
