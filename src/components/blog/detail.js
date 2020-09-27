import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import PropTypes from 'prop-types';

import { borderTopRight, borderBottomLeft, borderRadius } from 'stylesheet';
import Heading from 'components/heading';
import Text from 'components/text';

const BlogStyle = styled.li`
  ${tw`relative mb-8 w-full sm:w-2/5 lg:w-3/10`}
  .featured-image { 
    ${tw`w-2/3`}
    position: absolute;
    top: 20px;
    left -20px;
    ${borderTopRight(borderRadius)}
  }
  .content {
    ${tw`p-4 bg-gray-100 text-black`}
    padding-top: 36px;
    ${borderBottomLeft(borderRadius)}
    .title {
      ${tw`mb-3 uppercase`}
    }
    .tags {
      ${tw`flex flex-wrap`}
      li {
        ${tw`px-4 py-2 mr-2 mt-2`}
        border: 3px solid;
        ${borderTopRight(borderRadius)}
        ${tw`border-gray-200`}
      }
    }
    .excerpt {
      ${tw`mb-8`}
    }
    .anchor {
      ${tw`inline-block bg-gray-200 py-3 px-6 text-black uppercase`}
      ${borderTopRight(borderRadius)}
    }
  }
`;

const BlogDetail = props => {
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
    <BlogStyle key={id}>
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
              <li>
                <Text weight="semiBold" size="regular">
                  {tag}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </BlogStyle>
  );
};

export default BlogDetail;

BlogDetail.propTypes = {
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
};
