import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

import Heading from 'elements/heading';
import Text from 'elements/text';

import ConditionalWrapper from './_conditional_wrapper';

const Blogpost = ({ size, ...props }) => {
  const {
    node: {
      frontmatter: {
        title,
        tags,
        featured: {
          childImageSharp: { fluid },
        },
      },
      excerpt,
      id,
      fields: { slug },
    },
  } = props;

  return (
    <ConditionalWrapper key={id} condition={size === 'regular'}>
      <Img fluid={fluid} className="featured-image" />
      <Link to={`/blog/${slug}`}>
        <div className="content">
          <Heading as="h4" className="title">
            {title}
          </Heading>
          <Text weight="regular" size="regular" className="excerpt">
            {excerpt}
          </Text>
          <ul className="tags">
            {tags.map(tag => (
              <li key={uniqid()}>
                <Text weight="semiBold" size="regular">
                  {tag}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </ConditionalWrapper>
  );
};

export default Blogpost;

Blogpost.propTypes = {
  node: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      featured: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({}).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    excerpt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  size: PropTypes.string.isRequired,
};
