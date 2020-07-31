import React from 'react'

import Layout from '../components/layout'
import { Link, graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Layout title="Home">
    <h1>Logan Stucki</h1>

    <p>
      The thoughts and rants of a 19 year-old developer trying to figure out life.
    </p>

    <h3>Code</h3>
    <p>
      You can find my code on:
    </p>
    <ul>
      <li><a href="https://github.com/Smarticles101">GitHub</a></li>
    </ul>
    <p>
      Yeah that's it, mostly just GitHub. I put most of my code on GitHub.
    </p>
    
    <h2>Blog</h2>
    <p>Most recent from the blog:</p>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
        </li>
      ))}
      {data.allMarkdownRemark.edges.length < data.allMarkdownRemark.totalCount &&
        <li>
          <Link to={"/blog"}>
            ...
          </Link>
        </li>
      }
    </ul>

  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5  
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
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
