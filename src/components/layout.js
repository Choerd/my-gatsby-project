import React from 'react';
import PropTypes from 'prop-types';

import tw, { css } from 'twin.macro';
import { whiteSpace } from 'stylesheet';

import Header from 'components/header';
import Footer from 'components/footer';

const mainStyles = css`
  ${whiteSpace}
  ${tw`py-8`}
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main css={mainStyles}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
