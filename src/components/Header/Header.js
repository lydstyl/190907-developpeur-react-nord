/* eslint-disable */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import "./Header.scss"

const Header = ({ siteTitle }) => {
  const [menuOpened, setMenuOpened] = useState(false)

  const triggerMenu = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <React.Fragment>
      <header className="text-center shadow p-3 mt-5 bg-white rounded">
        <nav className={`top-menu navbar ${menuOpened ? "opened" : ""}`}>
          <Link className="btn btn-secondary btn-sm align-top" to="/cv">
            CV
          </Link>

          <Link className="btn btn-secondary btn-sm align-top" to="/">
            Portfolio
          </Link>

          <Link className="btn btn-secondary btn-sm align-top" to="/services">
            Services
          </Link>

          <span className="close" onClick={triggerMenu}>
            X
          </span>
        </nav>

        <Link className="site-title" to="/">
          <h1 className="d-inline align-text-bottom mr-4">
            <i className="fas fa-code"></i> {siteTitle}{" "}
            <i className="fab fa-react"></i>
          </h1>
        </Link>

        <a
          className={`btn open-menu btn-secondary btn-sm align-top ${
            menuOpened ? "opened" : ""
          }`}
          onClick={triggerMenu}
        >
          Menu
        </a>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
