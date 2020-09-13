import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
const BlogPost = (props) => {
    return (
        <Layout>
            <div className="container m-auto">
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
            </div>
        </Layout>
    )
}

export default BlogPost