import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ShadowBoxWrapper from "../components/ShadowBoxWrapper/ShadowBoxWrapper"

export default function Template({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const services = edges

    .filter(edge => edge.node.frontmatter.show)

    .map(({ node: { id, frontmatter, excerpt, path } }) => {
      return (
        <ShadowBoxWrapper key={id}>
          <h2>{frontmatter.title}</h2>
          <div>
            {excerpt} <Link to={frontmatter.path}>lire plus</Link>
          </div>
        </ShadowBoxWrapper>
      )
    })

  return (
    <Layout showPortfolioLink="true">
      <SEO title="Services" />

      <ShadowBoxWrapper>
        <h2>Mes services</h2>
      </ShadowBoxWrapper>

      {services}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/services/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            title
            show
            path
          }
        }
      }
    }
  }
`
