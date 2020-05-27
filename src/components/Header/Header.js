/* eslint-disable */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import gsap from "gsap"

import ShadowBoxWrapper from "../ShadowBoxWrapper/ShadowBoxWrapper"
import { QRContactMe } from "./QRContactMe/QRContactMe"
import Image from "../Image/Image"

import "./Header.scss"

const Header = ({ siteTitle }) => {
  const triggerMenu = () => {
    document.querySelector(".bm-burger-button > button").click()
  }

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: "elastic" },
    })
    // timeline.from(".rounded", { rotation: 9 })
    //   .from("h2", {
    //     x: 50,
    //     scale: 1.3,

    //     ease: "slow(0.7, 0.7, false)",
    //   })

    //   .from("p", {
    //     // ease: "expo.out",
    //     ease: "bounce.out",
    //     y: 20,
    //   })
    //   .from("span ", { x: -50, transformOrigin: "center bottom" })

    //   .from("a", {
    //     stagger: 0.2,
    //     rotation: -20,
    //     scale: 0.7,
    //     delay: -0.1,
    //   })

    const repeatEvery = 8000
    const durationTime = repeatEvery / 4 / 1000

    setInterval(() => {
      timeline
        .to(".menu-box a", { rotation: 180, duration: durationTime })
        .to("footer .col-md:nth-child(2)", {
          paddingLeft: 15,
          ease: "bounce.out",
        })
        .to(".menu-box a", { rotation: 0, duration: durationTime })
        .to("footer .col-md:nth-child(2)", {
          paddingLeft: 50,
          ease: "slow(0.7, 0.7, false)",
        })
    }, repeatEvery)
  }, [])

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

              <QRContactMe />

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
