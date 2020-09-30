import React from 'react';
import tw, { css } from 'twin.macro';
import Navigation from './_navigation';

const headerStyle = css`
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
