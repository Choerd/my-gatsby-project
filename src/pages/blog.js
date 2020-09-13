import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'

const Blog = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
                    edges {
                        node {
                            frontmatter {
                                title
                            }
                            id
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `
    )

    return (
        <Layout>
            <div className="container m-auto">
                <ul>
                    {data.allMarkdownRemark.edges.map(edge => {
                        return (
                            <li key={edge.node.id}>
                                <h2>
                                    <Link to={`/blog/${edge.node.fields.slug}`}>
                                        {edge.node.frontmatter.title}
                                    </Link>
                                </h2>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default Blog