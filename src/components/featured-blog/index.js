import React from 'react';
import Blogpost from 'components/blogpost';
import Image from 'elements/style-image';
import Test from 'images/high-five.png';

const featuredBlog = ({ node }) => {
  const data = node[0];
  return (
    <div className="flex flex-col md:flex-row -mt-6 md:mt-0">
      <Image
        border="borderTopRight"
        align="left"
        size="regular"
        src={Test}
        classes="order-last md:order-none"
      />
      <Blogpost classes="-mt-5 md:mt-0" size="large" {...data} />
    </div>
  );
};

export default featuredBlog;
