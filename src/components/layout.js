/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
import "./layout.css"

const Layout = ({ children }) => {
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

      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="shadow p-3 mt-5 mb-5 bg-white rounded">
        <div className="row">
          <div className="col-md">
            <a className="text-decoration-none" href="tel:+33781154503">
              <i className="fas fa-mobile-alt"></i> 07 81 15 45 03
            </a>
          </div>
          <div className="col-md">
            <a className="text-decoration-none" href="mailto:lydstyl@gmail.com">
              <i className="far fa-envelope"></i> lydstyl@gmail.com
            </a>
          </div>
          <div className="col-md">
            <a
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/lydstyl"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
