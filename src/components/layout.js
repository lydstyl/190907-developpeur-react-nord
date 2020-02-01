/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { scaleRotate as Menu } from "react-burger-menu"

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

  function showSettings(event) {
    event.preventDefault()
    // .
    // .
    // .
  }

  return (
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>

      <main id="page-wrap" className="container">
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
              <a
                className="text-decoration-none"
                href="mailto:lydstyl@gmail.com"
              >
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
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
