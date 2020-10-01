import React from 'react';

import Text from 'elements/text';

const Copyright = () => {
  return (
    <div className="container footer-copyright">
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
