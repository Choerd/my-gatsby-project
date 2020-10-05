import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from 'components/layout';
import Intro from 'components/intro';
import FeaturedBlog from 'components/featured-blog';

const Index = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 1
        ) {
          edges {
            node {
              frontmatter {
                title
                tags
                featured {
                  childImageSharp {
                    fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              excerpt(pruneLength: 300)
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  const {
    allMarkdownRemark: { edges: node },
  } = data;

  return (
    <Layout>
      <Intro />
      <FeaturedBlog node={node} />
    </Layout>
  );
};

export default Index;
