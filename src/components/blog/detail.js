import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const BlogDetail = props => {
  const {
    node: {
      frontmatter: { title, tags },
      excerpt,
      id,
      fields: { slug },
    },
  } = props;

  return (
    <li
      key={id}
      className="flex flex-col w-full md:w-5/12 lg:w-3/10 p-4 mb-8 mx-4 rounded bg-white"
    >
      <h2>{title}</h2>
      <ul className="flex my-2 flex-wrap">
        {tags.map(tag => (
          <li className="px-4 py-1 mr-2 border rounded-full">{tag}</li>
        ))}
      </ul>
      <p className="mb-auto">{excerpt}</p>
      <Link
        to={`/blog/${slug}`}
        className="px-4 py-2 border rounded-full self-center"
      >
        Read more
      </Link>
    </li>
  );
};

export default BlogDetail;

BlogDetail.propTypes = {
  node: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
    excerpt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
