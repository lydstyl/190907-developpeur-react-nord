import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
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
      <Link
        to="portfolio"
        style={{
          textDecoration: `none`,
          color: `white`,
          marginRight: `5px`,
        }}
      >
        Portfolio
      </Link>
      <a
        style={{
          textDecoration: `none`,
          color: `white`,
          marginRight: `5px`,
        }}
        href="tel:+33781154503"
      >
        Tél. 07 81 15 45 03
      </a>
      <a
        style={{
          textDecoration: `none`,
          color: `white`,
          marginRight: `5px`,
        }}
        href="mailto:lydstyl@gmail.com"
      >
        lydstyl@gmail.com
      </a>
      <a
        href="https://github.com/lydstyl"
        style={{
          textDecoration: `none`,
          color: `white`,
          marginRight: `5px`,
        }}
      >
        Github
      </a>
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
