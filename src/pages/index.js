import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from 'components/layout';

import Blogpost from 'components/blogpost';

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
      <Blogpost size="large" {...node[0]} />
    </Layout>
  );
};

export default Index;
