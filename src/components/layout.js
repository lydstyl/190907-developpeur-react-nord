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
    <div className="container">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
      />

      <Header
        siteTitle={data.site.siteMetadata.title}
        showPortfolioLink={showPortfolioLink}
      />
      <main siteTitle={data.site.siteMetadata.title}>{children}</main>
      <footer className="shadow p-3 mt-5 mb-5 bg-white rounded d-flex justify-content-around">
        <a className="" href="tel:+33781154503">
          <i className="fas fa-mobile-alt"></i> 07 81 15 45 03
        </a>
        <a class="" href="mailto:lydstyl@gmail.com">
          <i class="far fa-envelope"></i> lydstyl@gmail.com
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/lydstyl"
        >
          <i class="fab fa-github"></i> Github
        </a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
