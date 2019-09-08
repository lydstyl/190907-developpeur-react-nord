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
    .join(" ")

  const otherSkills = skills.other
    .map(mainSkill => {
      return mainSkill.title
    })
    .join(" ")

  const jobs = experience.map((xp, index) => {
    const { job, company, begin, ismycurrentjob, end } = xp

    let body = remark()
      .use(recommended)
      .use(remarkHtml)
      .processSync(xp.body)
      .toString()

    // console.log("end", typeof end, end)
    // let test = Date.parse(end)
    // console.log("test", test, typeof test)
    // console.log(test.getFullYear())

    let endDate = end
    if (ismycurrentjob) {
      endDate = "maintenant"
    }

    return (
      <div key={index}>
        <div className="d-flex justify-content-around">
          <h4>
            <i className="fas fa-user-tie"></i> {job}
          </h4>
          <span>
            <i className="far fa-building"></i>{" "}
            <span className="mr-5">{company} </span>
            <i className="far fa-calendar-alt"></i> {begin} à {endDate}
          </span>
        </div>

        <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </div>
    )
  })

  return (
    <Layout showPortfolioLink="true">
      <SEO title={title} />
      <div className="shadow p-3 mt-5 bg-white rounded">
        <p>Mise à jour le {date}</p>
        <p>{description}</p>
      </div>
      <h2 className="shadow p-3 mt-5 bg-white rounded">
        <i class="fas fa-bullseye"></i> Objectif: {objectif}
      </h2>

      <div className="shadow p-3 mt-5 bg-white rounded">
        <h2>
          <i class="far fa-check-square"></i> Compétences:
        </h2>
        <ul>
          <li>
            <h3>Principales:</h3>
            <p>{mainSkills}</p>
          </li>
          <li>
            <h3>Autres:</h3>
            <p>{otherSkills}</p>
          </li>
        </ul>
      </div>
      <div className="shadow p-3 mt-5 bg-white rounded">
        <h2>
          <i class="fas fa-briefcase"></i> Experiences:
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
        date(formatString: "MMMM DD, YYYY")
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
          begin
          ismycurrentjob
          end
          body
        }
      }
    }
  }
`
