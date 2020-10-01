import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import uniqid from 'uniqid';

import Layout from 'components/layout';
import Blogpost from 'components/blogpost';

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
          <Blogpost size="small" key={uniqid()} {...edge} />
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
