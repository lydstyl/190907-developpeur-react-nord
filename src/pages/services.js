import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ShadowBoxWrapper from "../components/ShadowBoxWrapper/ShadowBoxWrapper"
// import ShowcaseWebSite from "../components/ShowcaseWebSite/ShowcaseWebSite"
import ReviewWebSite from "../components/ReviewWebSite/ReviewWebSite"

export default function Template({ data }) {
  return (
    <Layout showPortfolioLink="true">
      <SEO title="CV" />

      <ShadowBoxWrapper>
        <h2>Mes services</h2>
      </ShadowBoxWrapper>

      {/* <ShowcaseWebSite /> */}

      <ReviewWebSite />
    </Layout>
  )
}
