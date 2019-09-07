import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const {
    date,
    title,
    subtitle,
    description,
    objectif,
    skills,
    experience,
  } = frontmatter

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
    const { job, company, begin, ismycurrentjob, end, body } = xp
    return (
      <div key={index}>
        <div>{job}</div>
        <div>{company}</div>
        <div>{begin}</div>
        <div>{ismycurrentjob}</div>
        <div>{end}</div>
        <div>{body}</div>
        <br />
      </div>
    )
  })

  return (
    <Layout>
      <SEO title="Page two" />
      <div className="blog-post-container">
        <div className="blog-post">
          <h2>{title}</h2>
          <p>Mise à jour le {date}</p>
          <h3>{subtitle}</h3>
          <p>{description}</p>

          <h3>Objectif: {objectif}</h3>

          <h3>Compétences:</h3>
          <h4>Principales: {mainSkills}</h4>
          <h4>Autres: {otherSkills}</h4>

          <h3>Experiences:</h3>
          {jobs}

          {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
        </div>
      </div>
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
        subtitle
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
