import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Image from '../Image/Image'

const CVDescriptionBox = () => {
  const data = useStaticQuery(
    graphql`
      {
        strapiAbout {
          description
          picture {
            childImageSharp {
              fixed(toFormat: JPG, width: 200) {
                src
              }
            }
          }
          goal
          updatedAt(formatString: "DD/MM/YYYY")
          youtube
        }
      }
    `
  )

  const { description, updatedAt, youtube } = data.strapiAbout

  return (
    <div className="cv-description-box shadow p-3 mt-5 bg-white rounded">
      <h2 className="d-none">
        CV Gabriel Brun ou curriculum vitae développeur React.js
      </h2>

      <Image src="photo_profil_gabriel_brun_github.jpg" />

      <p className="text-justify">{description}</p>

      <p className="text-right font-italic">Mise à jour le {updatedAt}</p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Xh0guBgyqJ8"
        title="recommandation"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default CVDescriptionBox
