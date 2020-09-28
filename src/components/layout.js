import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/header';
import Footer from 'components/footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="whiteSpace py-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
