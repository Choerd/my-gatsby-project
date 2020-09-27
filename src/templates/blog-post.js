import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from 'components/layout';

const BlogPost = props => {
  const {
    data: {
      markdownRemark: {
        frontmatter: { title },
        html,
      },
    },
  } = props;

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default BlogPost;

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featured {
          childImageSharp {
            fluid(maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;
