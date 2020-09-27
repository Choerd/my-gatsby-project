import React from 'react';
import tw, { css } from 'twin.macro';
import Navigation from './navigation';

import { whiteSpace } from '../styles';

const headerStyle = css`
  ${whiteSpace}
  border-bottom-left-radius: 12px;
  ${tw`bg-gray-100 text-black py-4`}
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <Navigation />
    </header>
  );
};

export default Header;
