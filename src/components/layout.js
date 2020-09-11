import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};