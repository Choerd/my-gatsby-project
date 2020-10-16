import React from 'react';
import Img from 'gatsby-image';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

import Heading from 'elements/heading';
import Text from 'elements/text';
import Anchor from 'elements/anchor';

import ConditionalWrapper from './_conditional-wrapper';

const Blogpost = ({ size, classes, ...props }) => {
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
    <ConditionalWrapper
      classes={classes}
      key={id}
      condition={size === 'regular'}
    >
      <div className="blogpost-content">
        <Heading as={`${size === 'regular' ? 'h4' : 'h3'}`} className="title">
          {title}
        </Heading>

        <ul className="tags">
          {tags.map(tag => (
            <li key={uniqid()}>
              <Text weight="semiBold" size="regular">
                {tag}
              </Text>
            </li>
          ))}
        </ul>

        <Text weight="regular" size="regular" className="excerpt">
          {excerpt}
        </Text>

        <Anchor type="primary" to={`/blog/${slug}`}>
          Read post
        </Anchor>
      </div>

      <Img fluid={fluid} className="blogpost-image" />
    </ConditionalWrapper>
  );
};

export default Blogpost;

Blogpost.defaultProps = {
  classes: null,
};

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
  classes: PropTypes.string,
};
