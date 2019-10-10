import React from "react"
import { Radar } from "react-chartjs-2"

const Skills = ({ skills }) => {
  const mainSkills = skills.main
    .map(mainSkill => {
      return mainSkill.title + ": " + mainSkill.rate + "/5"
    })
    .join(", ")

  const radarData = {
    labels: skills.main.map(skill => skill.title),
    datasets: [
      {
        data: skills.main.map(skill => skill.rate),
        backgroundColor: "rgba(67, 223, 103, 0.3)",
        borderColor: "rgba(67, 223, 103, 1)",
        borderWidth: 3,
        label: "Actuelles",
        lineTension: 0.2,
      },
      {
        data: skills.goal.map(skill => skill.rate),
        backgroundColor: "rgba(47, 223, 103, 0.1)",
        borderColor: "rgba(67, 223, 103, 0.3)",
        borderWidth: 3,
        label: "Objectif",
        lineTension: 0.2,
        borderDash: [5],
      },
    ],
  }

  const otherSkills = skills.other
    .map(mainSkill => {
      return mainSkill.title
    })
    .join(", ")

  return (
    <div className="skills shadow p-3 mt-5 bg-white rounded">
      <h2>
        <i className="far fa-check-square"></i> Compétences:
      </h2>

      <ul>
        <li>
          <h3>Principales:</h3>

          <p className="mainSkills text-justify">{mainSkills}</p>

          <div className="radar">
            <Radar data={radarData} />
          </div>
        </li>

        <li>
          <h3>Autres:</h3>
          <p className="text-justify">{otherSkills}</p>
        </li>
      </ul>
    </div>
  )
}

export default Skills
