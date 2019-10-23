import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WhyMe from "../../components/WhyMe/WhyMe"
import ShadowBoxWrapper from "../../components/ShadowBoxWrapper/ShadowBoxWrapper"

import "./service-template.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { title } = frontmatter

  return (
    <Layout>
      <SEO title={title} />

      <div className="shadow p-3 mt-5 mb-5 bg-white rounded">
        <h2>{title}</h2>
      </div>

      <ShadowBoxWrapper addClass="service">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </ShadowBoxWrapper>

      <WhyMe />

      <ShadowBoxWrapper>
        <Link className="btn btn-secondary btn-sm align-top" to="/services">
          Retour à la liste des services
        </Link>
      </ShadowBoxWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`
