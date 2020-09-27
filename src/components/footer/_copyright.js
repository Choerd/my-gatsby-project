import React from 'react';
import tw, { css } from 'twin.macro';

import { whiteSpace } from '../styles';

import Text from '../text';

const copyrightStyle = css`
  ${whiteSpace}
  ${tw`flex justify-between bg-gray-100 text-black py-4`}
`;

const Copyright = () => {
  return (
    <div css={copyrightStyle}>
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
