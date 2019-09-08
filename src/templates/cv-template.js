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

    return (
      <div key={index}>
        <h4>{job}</h4>
        <div>{company}</div>
        <div>{begin}</div>
        <div>{ismycurrentjob}</div>
        <div>{end}</div>
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
        <br />
        <br />
      </div>
    )
  })

  return (
    <Layout showPortfolioLink="true">
      <SEO title={title} />
      <p>Mise à jour le {date}</p>
      <p>{description}</p>
      <h2>Objectif: {objectif}</h2>

      <h2>Compétences:</h2>
      <h3>Principales: {mainSkills}</h3>
      <h3>Autres: {otherSkills}</h3>

      <h2>Experiences:</h2>
      {jobs}

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
