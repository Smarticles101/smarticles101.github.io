import React from 'react'

import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Layout title="Blog">
    <Link
      to="/blog/rss.xml"
    >
      Subscribe with rss
    </Link>
    <h1>Recent Posts</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <>
      <Link key={node.id} to={node.fields.slug} style={{
        textDecoration: 'none'
      }}>
        <div>
          <h3 style={{marginBottom: 0}}>
            {node.frontmatter.title}
          </h3>
          <h5>
            {node.frontmatter.date}
          </h5>
          <p>
            {node.excerpt}
          </p>
        </div>
      </Link>
      <hr />
      </>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
