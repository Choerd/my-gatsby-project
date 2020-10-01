import React from 'react';
import PropTypes from 'prop-types';

import { BlogStyle } from './styles';

export default function ConditionalWrapper({ condition, children }) {
  console.log(children);
  return condition ? <BlogStyle>{children}</BlogStyle> : <div>{children}</div>;
}

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.shape([
    { $$typeof: PropTypes.element },
    { $$typeof: PropTypes.element },
  ]).isRequired,
};
