import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostLink from "../../components/PostLink/PostLink"
import ShadowBoxWrapper from "../../components/ShadowBoxWrapper/ShadowBoxWrapper"

import "./portfolio-template.scss"

export default class BlogList extends React.Component {
  render() {
    const creations = this.props.data.allMarkdownRemark.edges

    const totalCreationNumber = this.props.data.allMarkdownRemark.totalCount

    const maxCreationNumberPerCreationsPage = 9 // todo import this number

    const creationsPagesNumber = Math.ceil(
      totalCreationNumber / maxCreationNumberPerCreationsPage
    )

    const creationsPagesLinks = []

    for (let i = 2; i < creationsPagesNumber + 1; i++) {
      creationsPagesLinks.push({ id: i, link: "/portfolio/" + i })
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

          <ShadowBoxWrapper>
            <ul className="post-box list-unstyled ">{Posts}</ul>
          </ShadowBoxWrapper>

          <ShadowBoxWrapper>
            <nav aria-label="...">
              <ul className="pagination pagination-lg justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/portfolio">
                    1
                  </Link>
                </li>
                {creationsPagesLinks.map(creationsPageLink => (
                  <li key={creationsPageLink.id}>
                    <Link className="page-link" to={creationsPageLink.link}>
                      {creationsPageLink.id}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </ShadowBoxWrapper>
        </div>
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
