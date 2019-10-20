import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"

export default class BlogList extends React.Component {
  render() {
    const creations = this.props.data.allMarkdownRemark.edges

    console.log(JSON.stringify(this.props.data, "", 3))

    const totalCreationNumber = this.props.data.allMarkdownRemark.totalCount

    const maxCreationNumberPerCreationsPage = 6 // todo import this number

    const creationsPagesNumber = Math.ceil(
      totalCreationNumber / maxCreationNumberPerCreationsPage
    )

    const creationsPagesLinks = []

    for (let i = 2; i < creationsPagesNumber + 1; i++) {
      creationsPagesLinks.push({ id: i, link: "/portfolia/" + i })
    }

    return (
      <Layout>
        {creations.map(({ node }) => {
          const title = node.frontmatter.title
          return (
            <div key={node.id}>
              <Link to={node.frontmatter.path}>{title}</Link>
            </div>
          )
        })}

        <br />
        <br />

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
