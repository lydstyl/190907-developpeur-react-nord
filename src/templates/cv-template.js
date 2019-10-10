import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CVDescriptionBox from "../components/CVDescriptionBox/CVDescriptionBox"
import Objectif from "../components/Objectif/Objectif"
import Skills from "../components/Skills/Skills"
import Experiences from "../components/Experiences/Experiences"

export default function Template({
  data: {
    markdownRemark: {
      frontmatter: { title },
    },
  }, // data props is injected by the GraphQL query below and data.markdownRemark holds our post
}) {
  return (
    <Layout showPortfolioLink="true">
      <SEO title={title} />

      <CVDescriptionBox />

      <Objectif />

      <Skills />

      <Experiences />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
      }
    }
  }
`
