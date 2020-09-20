import React from 'react';

const Footer = () => {
  return (
    <footer className="px-8 py-6 bg-black text-white">
      <p>
        Design and Development by Sjors Eveleens &copy;{' '}
        {new Date().getFullYear().toString()}{' '}
      </p>
    </footer>
  );
};

export default Footer;
