import React from 'react';
import tw, { css } from 'twin.macro';
import Navigation from './navigation';

const headerStyle = css`
  border-bottom-left-radius: 12px;
  ${tw`bg-gray-100 text-black pl-8 pr-4 py-4`}
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <Navigation />
    </header>
  );
};

export default Header;
