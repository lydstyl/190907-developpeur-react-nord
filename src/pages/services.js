import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ShadowBoxWrapper from "../components/ShadowBoxWrapper/ShadowBoxWrapper"
// import ShowcaseWebSite from "../components/ShowcaseWebSite/ShowcaseWebSite"
import ReviewWebSite from "../components/ReviewWebSite/ReviewWebSite"

export default function Template({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  console.log("data", edges[0].node)

  return (
    <Layout showPortfolioLink="true">
      <SEO title="CV" />

      <ShadowBoxWrapper>
        <h2>Mes services</h2>
      </ShadowBoxWrapper>

      {/* <ShowcaseWebSite /> */}

      <ReviewWebSite />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
          }
        }
      }
    }
  }
`
