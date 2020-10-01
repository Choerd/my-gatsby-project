import React from 'react';
import { Link } from 'gatsby';

import Text from 'elements/text';
import Anchor from 'elements/anchor';

const Navigation = () => {
  return (
    <nav className="container">
      <ul>
        <li className="py-2">
          <Link to="/">
            <Text weight="bold" size="large">
              Logo
            </Text>
          </Link>
        </li>
      </ul>

      <ul>
        <li className="mr-6">
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
