import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const Objectif = () => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/cv/" }) {
          frontmatter {
            objectif
          }
        }
      }
    `
  )

  return (
    <h2 className="shadow p-3 mt-5 bg-white rounded">
      <i className="fas fa-bullseye"></i> Objectif:{" "}
      <span style={{ fontSize: "1.5rem" }}>
        {data.markdownRemark.frontmatter.objectif}{" "}
      </span>
      <span>
        <Link className="btn btn-secondary btn-sm" to="/agenda">
          Disponibilités
        </Link>
      </span>
    </h2>
  )
}

export default Objectif
