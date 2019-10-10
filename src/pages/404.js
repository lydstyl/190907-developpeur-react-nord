import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div className="not-found">
      <h2 className="shadow p-3 mt-5 bg-white rounded">
        Cette page n'éxiste pas
      </h2>

      <div className="shadow p-3 mt-5 bg-white rounded">
        <img
          src="https://media2.giphy.com/media/9J7tdYltWyXIY/200.webp?cid=790b7611bf75a52944289c836e1dffb6728a0bb583a20ef5&rid=200.webp"
          alt="not found"
        />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
