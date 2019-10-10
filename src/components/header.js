import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, showPortfolioLink }) => (
  <header className="text-center shadow p-3 mt-5 bg-white rounded">
    <h1 className="d-inline align-text-bottom mr-4">
      <i className="fas fa-code"></i> {siteTitle}{" "}
      <i className="fab fa-react"></i>
    </h1>

    {!showPortfolioLink && (
      <Link className="btn btn-secondary btn-sm align-top" to="/">
        Voir le CV
      </Link>
    )}

    {showPortfolioLink && (
      <Link className="btn btn-secondary btn-sm align-top" to="/portfolio">
        Voir le Portfolio
      </Link>
    )}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
