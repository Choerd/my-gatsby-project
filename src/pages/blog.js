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
                                title,
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
    )

    return (
        <Layout>
            <div className="container m-auto">
                <ul className="flex flex-wrap justify-between">
                    {data.allMarkdownRemark.edges.map(edge => {
                        return (
                            <li key={edge.node.id} className="w-full md:w-5/12 lg:w-3/10 border border-red p-4 mb-12">
                                <h2 className="blog-title">{edge.node.frontmatter.title}</h2>
                                <ul className="flex my-2 flex-wrap">
                                    {edge.node.frontmatter.tags.map(tag => <li className="px-4 py-1 mr-2 border border-red rounded-full">{tag}</li>)}
                                </ul>
                                <p className="blog-paragraph">{edge.node.excerpt}</p>
                                <div className="flex justify-center">
                                    <Link to={`/blog/${edge.node.fields.slug}`} className="px-4 py-2 mt-5 border border-red rounded-full">Read more</Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default Blog