import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import remark from "remark"
// import recommended from "remark-preset-lint-recommended"
// import remarkHtml from "remark-html"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { date, img, link, title, body } = frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <h2>{title}</h2>
      <p>Mise à jour le {date}</p>

      <img src={img} alt="img" />
      {link && (
        <a target="_blank" rel="noopener noreferrer" href={link}>
          Lien de la création
        </a>
      )}

      <p>{body}</p>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <Link to="/portfolio">Retour</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        img
        link
        title
        body
        path
      }
    }
  }
`
