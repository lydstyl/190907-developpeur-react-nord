import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostLink from "../../components/PostLink/PostLink"

import "./portfolio-template.scss"

export default class BlogList extends React.Component {
  render() {
    const creations = this.props.data.allMarkdownRemark.edges

    console.log(JSON.stringify(this.props.data, "", 3))

    const totalCreationNumber = this.props.data.allMarkdownRemark.totalCount

    const maxCreationNumberPerCreationsPage = 9 // todo import this number

    const creationsPagesNumber = Math.ceil(
      totalCreationNumber / maxCreationNumberPerCreationsPage
    )

    const creationsPagesLinks = []

    for (let i = 2; i < creationsPagesNumber + 1; i++) {
      creationsPagesLinks.push({ id: i, link: "/portfolia/" + i })
    }

    const Posts = creations
      // .filter(edge => edge.node.frontmatter.path.includes("creation")) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return (
      <Layout>
        <SEO title="Portfolio" />

        <div className="portfolio">
          <div className="shadow p-3 mt-5 mb-5 bg-white rounded">
            <p>Bienvenue sur mon portfolio.</p>
            <p>Ci-dessous mes dernières créations.</p>
          </div>

          <ul className="post-box list-unstyled shadow p-3 mt-5 mb-5 bg-white rounded">
            {Posts}
          </ul>
        </div>

        <div>
          <Link to="/portfolia">/portfolia</Link>
        </div>

        {creationsPagesLinks.map(creationsPageLink => (
          <div key={creationsPageLink.id}>
            <Link to={creationsPageLink.link}>{creationsPageLink.link}</Link>
          </div>
        ))}
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { fileAbsolutePath: { regex: "/creations/" } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            path
            title
            img
          }
        }
      }
    }
  }
`
