import React from 'react'

import Layout from '../components/layout'
import { Link, graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Layout title="Home">
    <h1>Logan Stucki</h1>

    <h2>About</h2>
    <p>
      I am 17 years old. I write code and do computer things.
      Sometimes, I do crazy things like completely re-design the website
      I just made or hack an online stem trivia quiz and win lots of 
      money even though I told them I hacked it. Anyways, I just made this new site
      and I hope to fill it with lots of content. I'll be posting blog updates
      every now and then about interesting computery things. You'll find
      most ones for a while will probably primarily be about React because
      I accidentally fell in love with it. Oops.
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

    <h3><a href="/resume.pdf">Resume</a></h3>
    
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
