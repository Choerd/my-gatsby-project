import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// import Img from 'gatsby-image';
// import tw, { css } from 'twin.macro';

import Layout from 'components/layout';
import Anchor from 'components/anchor';
// import Heading from 'components/heading';
// import Text from 'components/text';

// const featuredBlogStyle = css`
//   .check-more {
//     ${tw`uppercase mb-2 py-2 ml-auto flex items-center`}
//     width: fit-content;
//     :after {
//       content: '';
//       margin-left: 12px;
//       border-top: 6px solid transparent;
//       border-left: 9px solid black;
//       border-bottom: 6px solid transparent;
//     }
//   }
//   article {
//     ${tw`bg-gray-100 text-black p-12 w-2/3 ml-auto mb-12 relative borderBottomLeft`}
//     h3 {
//       ${tw`uppercase mb-6`}
//     }
//     .wrapper {
//       ${tw`flex`}
//       .content {
//         ${tw`w-3/5 pr-8 flex flex-col justify-between`}
//         a {
//           ${tw`inline-block py-4 px-8 bg-gray-200 uppercase self-start borderTopRight`}
//         }
//       }
//       .meta-data {
//         ${tw`w-2/5`}
//         ul {
//           ${tw`flex`}
//           margin-bottom: -4em;
//           li {
//             ${tw`px-4 py-2 border-5 border-gray-200 borderTopRight`}
//             &:not(:last-of-type) {
//               ${tw`mr-4`}
//             }
//           }
//         }
//         .featured-image {
//           width: calc(100% + 6em);
//           position: absolute;
//           bottom: -6em;
//           img {
//             ${tw`borderBottomRight`}
//           }
//         }
//       }
//     }
//   }
// `;

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
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: {
              title,
              tags,
              featured: {
                childImageSharp: { fluid },
              },
            },
            excerpt,
            fields: { slug },
          },
        },
      ],
    },
  } = data;

  return (
    <Layout>
      {/* <div css={featuredBlogStyle}>
        <Link to="/blog/">
          <Text className="check-more" weight="semiBold" size="regular">
            Check out more posts
          </Text>
        </Link>
        <article>
          <Heading as="h3">{title}</Heading>
          <div className="wrapper">
            <div className="content">
              <Text weight="regular" size="regular">
                {excerpt}
              </Text>
              <Link to={`/blog/${slug}`}>
                <Text weight="semiBold" size="large">
                  Read post
                </Text>
              </Link>
            </div>
            <div className="meta-data">
              <ul>
                {tags.map(tag => (
                  <li>
                    <Text weight="semiBold" size="regular">
                      {tag}
                    </Text>
                  </li>
                ))}
              </ul>
              <Img fluid={fluid} className="featured-image" />
            </div>
          </div>
        </article>
      </div> */}

      <Anchor to="/blog/" type="primary">
        Button
      </Anchor>
      <br />
      <br />
      <br />
      <Anchor to="/blog/" type="secondary">
        Button
      </Anchor>
    </Layout>
  );
};

export default Index;
