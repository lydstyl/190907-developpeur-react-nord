import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { date, title, description, objectif, skills, experience } = frontmatter

  const mainSkills = skills.main
    .map(mainSkill => {
      return mainSkill.title + ": " + mainSkill.rate + "/5"
    })
    .join(", ")

  const otherSkills = skills.other
    .map(mainSkill => {
      return mainSkill.title
    })
    .join(", ")

  const jobs = experience.map((xp, index) => {
    const { job, company, begin, ismycurrentjob, end } = xp

    let body = remark()
      .use(recommended)
      .use(remarkHtml)
      .processSync(xp.body)
      .toString()

    let endDate = end
    if (ismycurrentjob) {
      endDate = "maintenant"
    }

    return (
      <div key={index}>
        <div className="row">
          <div className="col-md-5">
            <h4>
              <i className="fas fa-user-tie"></i> {job}
            </h4>
          </div>
          <div className="col-md-4">
            <i className="far fa-building"></i>{" "}
            <span className="mr-5">{company} </span>
          </div>
          <div className="col-md">
            <i className="far fa-calendar-alt"></i> {begin} à {endDate}
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </div>
    )
  })

  return (
    <Layout showPortfolioLink="true">
      <SEO title={title} />
      <div className="shadow p-3 mt-5 bg-white rounded">
        <p className="text-right font-italic">Mise à jour le {date}</p>
        <p className="text-justify">{description}</p>
      </div>
      <h2 className="shadow p-3 mt-5 bg-white rounded">
        <i className="fas fa-bullseye"></i> Objectif:{" "}
        <span style={{ fontSize: "1.5rem" }}>{objectif}</span>
      </h2>

      <div className="shadow p-3 mt-5 bg-white rounded">
        <h2>
          <i className="far fa-check-square"></i> Compétences:
        </h2>
        <ul>
          <li>
            <h3>Principales:</h3>
            <p className="text-justify">{mainSkills}</p>
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
        {jobs}
      </div>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
