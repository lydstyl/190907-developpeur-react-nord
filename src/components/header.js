import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, showPortfolioLink }) => (
  <header className="text-center">
    <h1 className="d-inline align-text-bottom mr-4">{siteTitle}</h1>
    {!showPortfolioLink && (
      <Link className="btn btn-secondary btn-sm align-top" to="/">
        Voir le CV
      </Link>
    )}

    {showPortfolioLink && (
      <Link className="btn btn-secondary btn-sm align-top" to="portfolio">
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
