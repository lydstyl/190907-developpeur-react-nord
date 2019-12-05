/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { show: { ne: false } } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  const { createPage } = actions

  const creationTemplate = path.resolve(
    `src/templates/creation-template/creation-template.js`
  )

  const serviceTemplate = path.resolve(
    `src/templates/service-template/service-template.js`
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // if (!node.frontmatter.show) return null

    const path = node.frontmatter.path

    const template = path.includes("/services/")
      ? serviceTemplate
      : creationTemplate

    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {}, // additional data can be passed via context
    })
  })

  // Create creations-list pages
  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 9
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve(
        "./src/templates/portfolio-template/portfolio-template.js"
      ),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
