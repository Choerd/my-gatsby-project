import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import BlogList from '../components/blog/list';

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

  const { allMarkdownRemark } = data;

  return (
    <Layout>
      <BlogList {...allMarkdownRemark} />
    </Layout>
  );
};

export default Blog;
