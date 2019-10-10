import React from "react"

import Jobs from "../Jobs/Jobjs"

const Experiences = ({ experience }) => {
  return (
    <div className="shadow p-3 mt-5 bg-white rounded">
      <h2>
        <i className="fas fa-briefcase"></i> Experiences:
      </h2>

      <Jobs experience={experience} />
    </div>
  )
}

export default Experiences
