import React from "react"
import remark from "remark"
import remarkHtml from "remark-html"
import recommended from "remark-preset-lint-recommended"

import { useStaticQuery, graphql } from "gatsby"

const Jobs = () => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/cv/" }) {
          frontmatter {
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
  )

  const jobs = data.markdownRemark.frontmatter.experience.map((xp, index) => {
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
      <div key={index} className="jobs">
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

  return jobs
}

export default Jobs
