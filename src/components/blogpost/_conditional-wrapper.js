import React from 'react';
import PropTypes from 'prop-types';

import { StyledBlogList, StyledBlogArticle } from './styles';

export default function ConditionalWrapper({ condition, children, classes }) {
  return condition ? (
    <StyledBlogList className={classes}>{children}</StyledBlogList>
  ) : (
    <StyledBlogArticle className={classes}>{children}</StyledBlogArticle>
  );
}

ConditionalWrapper.defaultProps = {
  classes: null,
};

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  classes: PropTypes.string,
};
