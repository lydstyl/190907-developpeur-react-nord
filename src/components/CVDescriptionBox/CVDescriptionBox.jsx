import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const CVDescriptionBox = () => {
  const data = useStaticQuery(
    graphql`
      {
        markdownRemark(fileAbsolutePath: { regex: "/cv/" }) {
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    `
  )

  const { date, description } = data.markdownRemark.frontmatter

  return (
    <div className="cv-description-box shadow p-3 mt-5 bg-white rounded">
      <h2 className="d-none">
        CV Gabriel Brun ou curriculum vitae développeur React.js
      </h2>
      <img src="img/GabrielBrun.jpeg" alt="Gabriel BRUN" />
      <p className="text-justify">{description}</p>
      <p className="text-right font-italic">Mise à jour le {date}</p>
    </div>
  )
}

export default CVDescriptionBox
