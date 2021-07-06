import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CVDescriptionBox from "../components/CVDescriptionBox/CVDescriptionBox"
import Objectif from "../components/Objectif/Objectif"
import Skills from "../components/Skills/Skills"
import Experiences from "../components/Experiences/Experiences"
import Availability from "../components/Availability/Availability"

export default function Template({ data }) {
  return (
    <Layout>
      <SEO
        title="CV"
        description="CV développeur full stack JS Gabriel Brun. Curriculum vitae developpeur JavaScript, React, Node, Gatsby, Strapi dans le Nord."
      />

      <CVDescriptionBox />

      <Objectif />

      <Skills />

      <Experiences />

      <Availability />
    </Layout>
  )
}
