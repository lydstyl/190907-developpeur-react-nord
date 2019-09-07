import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h2>Accueil de {data.site.siteMetadata.title}</h2>
    <p>Welcome in my Gatsby site.</p>
  </Layout>
)

export default IndexPage
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
