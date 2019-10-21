import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "./creation-template.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { date, img, link, title } = frontmatter

  return (
    <Layout>
      <SEO title={title} />

      <div className="shadow p-3 mt-5 mb-5 bg-white rounded">
        <h2>{title}</h2>
        <p>Cette création a débuté le {date}</p>
      </div>

      <div className="shadow p-3 mb-5 bg-white rounded">
        <img
          src={img}
          alt="img"
          style={{ display: "block", maxWidth: "100%", margin: "auto" }}
        />
      </div>

      <div className="creation-html shadow p-3 mb-5 bg-white rounded text-justify">
        {link && (
          <div className="mb-3 text-right">
            <a
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              Lien vers la création en ligne
            </a>
          </div>
        )}

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <Link className="btn btn-secondary btn-sm align-top" to="/">
          Retour à la liste des créations
        </Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        img
        link
        title
        path
      }
    }
  }
`
