import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h2>Portfolio</h2>
    <p>Welcome to my portfolio</p>
    <Link to="/">Retourner au CV</Link>
  </Layout>
)

export default SecondPage
