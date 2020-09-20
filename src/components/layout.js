import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div id="Main" className="py-8 bg-light-black">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
