import React from 'react';
import tw, { css } from 'twin.macro';

import Copyright from './_copyright';
import Footer from './_footer';

const baseStyling = css`
  ${tw`bg-gray-100`}
  overflow: hidden;
  padding-top: 4em;
`;

const index = () => {
  return (
    <footer css={baseStyling}>
      <Footer />
      <Copyright />
    </footer>
  );
};

export default index;
