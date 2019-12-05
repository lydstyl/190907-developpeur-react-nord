/* eslint-disable */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import ShadowBoxWrapper from "../ShadowBoxWrapper/ShadowBoxWrapper"
import Image from "../Image/Image"

import "./Header.scss"

const Header = ({ siteTitle }) => {
  const [menuOpened, setMenuOpened] = useState(false)

  const triggerMenu = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <React.Fragment>
      <header className="text-center">
        <ShadowBoxWrapper addClass="header-menu">
          <div className="menu-box">
            <nav className={`top-menu navbar ${menuOpened ? "opened" : ""}`}>
              <Link className="btn btn-secondary btn-sm align-top" to="/cv">
                CV
              </Link>

              <Link className="btn btn-secondary btn-sm align-top" to="/">
                Portfolio
              </Link>

              <Link
                className="btn btn-secondary btn-sm align-top"
                to="/services"
              >
                Services
              </Link>

              <span className="close" onClick={triggerMenu}>
                X
              </span>
            </nav>

            <a
              className={`btn open-menu btn-secondary btn-sm align-top ${
                menuOpened ? "opened" : ""
              }`}
              onClick={triggerMenu}
            >
              Menu
            </a>
          </div>
        </ShadowBoxWrapper>

        <div className="space"></div>

        <ShadowBoxWrapper addClass="header-title">
          <Link className="site-title" to="/">
            <h1 className="d-inline align-text-bottom mr-4">
              <Image src="logo_eagle/logo_eagle.png" />
              <div className="title-box">
                <span>{siteTitle}</span>
              </div>
            </h1>
          </Link>
        </ShadowBoxWrapper>
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
