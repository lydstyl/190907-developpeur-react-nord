import React from "react"
import { graphql, Link } from "gatsby"
import { Radar } from "react-chartjs-2"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jobs from "../components/Jobs/Jobjs"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark
  const { date, title, description, objectif, skills, experience } = frontmatter
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
    <Layout showPortfolioLink="true">
      <SEO title={title} />
      <div className="cv-description-box shadow p-3 mt-5 bg-white rounded">
        <img
          src="https://media.licdn.com/dms/image/C4E03AQHnYrk8fffMFw/profile-displayphoto-shrink_200_200/0?e=1573689600&v=beta&t=QsruEIIjPag1WnfHE27ejIJ8-No84k7FWz6HJjuX9gg"
          alt="Gabriel BRUN"
        />
        <p className="text-justify">{description}</p>
        <p className="text-right font-italic">Mise à jour le {date}</p>
      </div>
      <h2 className="shadow p-3 mt-5 bg-white rounded">
        <i className="fas fa-bullseye"></i> Objectif:{" "}
        <span style={{ fontSize: "1.5rem" }}>{objectif} </span>
        <span>
          <Link className="btn btn-secondary btn-sm" to="agenda">
            Voir mes disponibilités
          </Link>
        </span>
      </h2>

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
      <div className="shadow p-3 mt-5 bg-white rounded">
        <h2>
          <i className="fas fa-briefcase"></i> Experiences:
        </h2>

        <Jobs experience={experience} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        path
        title
        description
        objectif
        skills {
          main {
            title
            rate
          }
          goal {
            title
            rate
          }
          other {
            title
          }
        }
        experience {
          job
          company
          begin(formatString: "MM/YYYY")
          ismycurrentjob
          end(formatString: "MM/YYYY")
          body
        }
      }
    }
  }
`
