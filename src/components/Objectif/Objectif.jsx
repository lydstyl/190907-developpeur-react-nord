import React from "react"
import { Link } from "gatsby"

const Objectif = ({ objectif }) => {
  return (
    <h2 className="shadow p-3 mt-5 bg-white rounded">
      <i className="fas fa-bullseye"></i> Objectif:{" "}
      <span style={{ fontSize: "1.5rem" }}>{objectif} </span>
      <span>
        <Link className="btn btn-secondary btn-sm" to="agenda">
          Voir mes disponibilités
        </Link>
      </span>
    </h2>
  )
}

export default Objectif
