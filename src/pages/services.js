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
  const services = edges.map(({ node: { id, frontmatter, excerpt } }) => {
    return (
      <ShadowBoxWrapper key={id}>
        <h2>{frontmatter.title}</h2>
        <div>{excerpt}</div>
      </ShadowBoxWrapper>
    )
  })

  return (
    <Layout showPortfolioLink="true">
      <SEO title="CV" />

      <ShadowBoxWrapper>
        <h2>Mes services</h2>
      </ShadowBoxWrapper>

      {services}

      {/* <ShowcaseWebSite /> */}

      <ReviewWebSite />
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
          excerpt(pruneLength: 250)
          frontmatter {
            title
          }
        }
      }
    }
  }
`
