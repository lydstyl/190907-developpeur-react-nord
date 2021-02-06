import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Objectif = () => {
  const data = useStaticQuery(
    graphql`
      {
        strapiAbout {
          goal
        }
      }
    `
  )

  return (
    <h2 className="shadow p-3 mt-5 bg-white rounded">
      <i className="fas fa-bullseye"></i> Objectif :{" "}
      <span style={{ fontSize: "1.5rem" }}>
        {data.strapiAbout.goal}{" "}
      </span>
    </h2>
  )
}

export default Objectif
