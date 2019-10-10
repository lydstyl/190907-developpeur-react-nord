import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"

const Portfolio = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => edge.node.frontmatter.path.includes("creation")) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title="Portfolio" />

      <div className="shadow p-3 mt-5 mb-5 bg-white rounded">
        <p>Bienvenue sur mon portfolio.</p>
        <p>Ci-dessous mes dernières créations.</p>
      </div>

      <ul className="list-unstyled shadow p-3 mt-5 mb-5 bg-white rounded">
        {Posts}
      </ul>
    </Layout>
  )
}

export default Portfolio

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            path
            title
          }
        }
      }
    }
  }
`
