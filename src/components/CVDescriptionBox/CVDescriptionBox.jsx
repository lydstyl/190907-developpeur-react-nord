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
      <img
        src="https://media.licdn.com/dms/image/C4E03AQHnYrk8fffMFw/profile-displayphoto-shrink_200_200/0?e=1573689600&v=beta&t=QsruEIIjPag1WnfHE27ejIJ8-No84k7FWz6HJjuX9gg"
        alt="Gabriel BRUN"
      />
      <p className="text-justify">{description}</p>
      <p className="text-right font-italic">Mise à jour le {date}</p>
    </div>
  )
}

export default CVDescriptionBox
