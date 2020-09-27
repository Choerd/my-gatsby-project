import React from 'react';
import PropTypes from 'prop-types';
import tw, { css } from 'twin.macro';
import BlogDetail from './detail';

const blogListStyle = css`
  ${tw`flex flex-wrap justify-center sm:justify-between`}
`;

const BlogList = props => {
  const { edges } = props;

  return (
    <ul css={blogListStyle}>
      {edges.map(edge => (
        <BlogDetail {...edge} />
      ))}
    </ul>
  );
};

export default BlogList;

BlogList.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
