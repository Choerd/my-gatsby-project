import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import uniqid from 'uniqid';
import { theme, css } from 'twin.macro';

import Layout from 'components/layout';
import Blogpost from 'components/blogpost';

const centerStyle = () => {
  return css`
    @media screen and (max-width: ${theme('screens.sm')}) {
      width: calc(100% - 20px);
      margin-left: auto;
    }
  `;
};

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
      <ul
        css={centerStyle}
        className="flex flex-wrap justify-center sm:justify-between"
      >
        {edges.map(edge => (
          <Blogpost size="regular" key={uniqid()} {...edge} />
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
