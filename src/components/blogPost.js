import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout";
import Helmet from 'react-helmet'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout title={"Blog post"}>
      <Helmet
        title={frontmatter.title}
      />
      <h3 style={{marginBottom: 0}}>
        {frontmatter.title}
      </h3>
      <h4>
        {frontmatter.date}
      </h4>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`