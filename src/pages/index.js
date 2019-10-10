import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CVDescriptionBox from "../components/CVDescriptionBox/CVDescriptionBox"
import Objectif from "../components/Objectif/Objectif"
import Skills from "../components/Skills/Skills"
import Experiences from "../components/Experiences/Experiences"

export default function Template({ data }) {
  console.log(data)

  return (
    <Layout showPortfolioLink="true">
      <SEO title="CV" />

      <CVDescriptionBox />

      <Objectif />

      <Skills />

      <Experiences />
    </Layout>
  )
}
