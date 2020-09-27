import React from 'react';
import PropTypes from 'prop-types';
import BlogDetail from './detail';

const BlogList = props => {
  const { edges } = props;

  return (
    <ul className="flex flex-wrap justify-center lg:justify-between container m-auto">
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
