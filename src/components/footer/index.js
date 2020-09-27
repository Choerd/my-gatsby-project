import React from 'react';
import { css } from 'twin.macro';

import Copyright from './_copyright';
import Footer from './_footer';

const baseStyling = css`
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
