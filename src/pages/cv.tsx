import React from "react"
import { graphql, Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import CVDescriptionBox from "../components/CVDescriptionBox/CVDescriptionBox"
import Objectif from "../components/Objectif/Objectif"
import Skills from "../components/Skills/Skills"
import Experiences from "../components/Experiences/Experiences"

export default function Template({ data }) {
  return (
    <Layout>
      <SEO title="CV" description="CV Gabriel Brun, ou curriculum vitae d'un developpeur JavaScript, React.js, Gatsby.js dans le Nord." />

      <CVDescriptionBox />

      <Objectif />

      <Skills />

      <Experiences />
    </Layout>
  )
}