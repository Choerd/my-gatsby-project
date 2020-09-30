import React from 'react';
import PropTypes from 'prop-types';

import SEO from 'components/seo';
import Header from 'components/header';
import Footer from 'components/footer';

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      <main className="container py-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
