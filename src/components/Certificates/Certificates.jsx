import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const Certificates = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allStrapiCertificat {
          nodes {
            name
            url
          }
        }
      }
    `
  )

  const certificats = data.allStrapiCertificat.nodes.map(c => (
    <p key={c.name} className="text-justify">
      <a target="_blank" rel="noopener noreferrer" href={c.url}>
        {c.name}
      </a>
    </p>
  ))

  return (
    <li>
      <h3>Certificates & recommendations:</h3>

      <div className="certificates">{certificats}</div>
    </li>
  )
}
