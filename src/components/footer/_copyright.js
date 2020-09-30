import React from 'react';

import Text from 'components/text';

const Copyright = () => {
  return (
    <div className="container flex justify-between bg-gray-100 text-black py-4">
      <Text weight="regular" size="small">
        &copy; {new Date().getFullYear().toString()} | Sjors Eveleens
      </Text>
      <Text weight="regular" size="small">
        Resources
      </Text>
    </div>
  );
};

export default Copyright;
