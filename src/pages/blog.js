import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from 'components/layout';
import BlogDetail from 'components/blog/detail';

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
          edges {
            node {
              frontmatter {
                title
                tags
                featured {
                  childImageSharp {
                    fluid(maxWidth: 750) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              excerpt
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
    allMarkdownRemark: { edges },
  } = data;

  return (
    <Layout>
      <ul className="flex flex-wrap justify-center sm:justify-between">
        {edges.map(edge => (
          <BlogDetail {...edge} />
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
