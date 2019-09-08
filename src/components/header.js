import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, showPortfolioLink }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      color: `white`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {showPortfolioLink && (
        <Link
          to="portfolio"
          style={{
            textDecoration: `none`,
            color: `white`,
            marginRight: `5px`,
          }}
        >
          Voir mon Portfolio
        </Link>
      )}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
