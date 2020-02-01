/* eslint-disable */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import ShadowBoxWrapper from "../ShadowBoxWrapper/ShadowBoxWrapper"
import Image from "../Image/Image"

import "./Header.scss"

const Header = ({ siteTitle }) => {
  const triggerMenu = () => {
    document.querySelector(".bm-burger-button > button").click()
  }

  return (
    <React.Fragment>
      <header className="text-center">
        <ShadowBoxWrapper addClass="header-menu">
          <div className="menu-box">
            <a
              className="btn open-menu btn-secondary btn-sm align-top"
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
