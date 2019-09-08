/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, showPortfolioLink }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        showPortfolioLink={showPortfolioLink}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <a
            style={{
              textDecoration: `none`,
              marginRight: `5px`,
            }}
            href="tel:+33781154503"
          >
            Tél. 07 81 15 45 03
          </a>
          <a
            style={{
              textDecoration: `none`,
              marginRight: `5px`,
            }}
            href="mailto:lydstyl@gmail.com"
          >
            lydstyl@gmail.com
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/lydstyl"
            style={{
              textDecoration: `none`,
              marginRight: `5px`,
            }}
          >
            Github
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
