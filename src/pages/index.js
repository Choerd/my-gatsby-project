import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from 'components/layout';
import Blogpost from 'components/blogpost';
import Intro from 'components/intro';

import Anchor from 'elements/anchor';

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
      <div className="flex flex-col justify-end mb-12">
        <Anchor to="/blog/" type="secondary" className="ml-auto mr-20 mb-4">
          Check out more posts
        </Anchor>
        <Blogpost size="large" {...node[0]} />
      </div>
    </Layout>
  );
};

export default Index;
