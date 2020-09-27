import React from 'react';
import { Link } from 'gatsby';

import Text from '../text';

const Navigation = () => {
  return (
    <nav className="flex justify-between">
      <ul>
        <li className="py-2">
          <Link to="/">
            <Text weight="bold" size="large">
              Logo
            </Text>
          </Link>
        </li>
      </ul>

      <ul className="flex">
        <li className="px-4 py-2">
          <Link to="/blog/">
            <Text weight="bold" size="large">
              Blog
            </Text>
          </Link>
        </li>
        <li className="px-4 py-2">
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
