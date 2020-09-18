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
      className="w-full md:w-5/12 lg:w-3/10 border border-red p-4 mb-8 mx-4"
    >
      <h2 className="blog-title">{title}</h2>
      <ul className="flex my-2 flex-wrap">
        {tags.map(tag => (
          <li className="px-4 py-1 mr-2 border border-red rounded-full">
            {tag}
          </li>
        ))}
      </ul>
      <p className="blog-paragraph">{excerpt}</p>
      <div className="flex justify-center">
        <Link
          to={`/blog/${slug}`}
          className="px-4 py-2 mt-5 border border-red rounded-full"
        >
          Read more
        </Link>
      </div>
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
