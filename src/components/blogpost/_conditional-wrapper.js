import React from 'react';
import PropTypes from 'prop-types';

import { StyledBlogList, StyledBlogArticle } from './styles';

export default function ConditionalWrapper({ condition, children }) {
  return condition ? (
    <StyledBlogList>{children}</StyledBlogList>
  ) : (
    <StyledBlogArticle>{children}</StyledBlogArticle>
  );
}

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};
