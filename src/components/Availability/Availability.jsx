import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Availability = () => {
  const data = useStaticQuery(
    graphql`
      {
        strapiAbout {
          availability
        }
      }
    `
  )

  const { availability } = data.strapiAbout

  return (
    <div className="cv-description-box shadow p-3 mt-5 bg-white rounded">
      <h2 className="">
        <i className="fa fa-male" aria-hidden="true"></i> Disponibilité
      </h2>

      <p className="text-justify">{availability}</p>
    </div>
  )
}

export default Availability
