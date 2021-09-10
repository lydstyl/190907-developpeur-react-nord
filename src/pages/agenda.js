import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Agenda de mes disponibilités" />

    <h2 className="shadow p-3 mt-5 bg-white rounded">Mes disponiblités</h2>

    <div className="shadow p-3 mt-5 bg-white rounded">
      <iframe
        title="Chart1"
        className="mobile-calendar"
        src="https://calendar.google.com/calendar/embed?showTitle=0&mode=AGENDA&showCalendars=0&bgcolor=%23eae9e7&src=jjuro8f0flunl7jqb58kbp797g%40group.calendar.google.com&ctz=Europe%2FParis"
        style={{ border: "0" }}
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
      ></iframe>

      {/* <iframe
        title="Chart2"
        className="calendar"
        src="https://calendar.google.com/calendar/embed?showTitle=0&mode=WEEK&showCalendars=0&bgcolor=%23eae9e7&src=jjuro8f0flunl7jqb58kbp797g%40group.calendar.google.com&ctz=Europe%2FParis"
        style={{ border: "0" }}
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe> */}

      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FParis&src=amp1cm84ZjBmbHVubDdqcWI1OGticDc5N2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%238E24AA"
        style="border:solid 1px #777"
        style={{ border: "solid 1px #777" }}
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
        className="calendar"
      ></iframe>
    </div>
  </Layout>
)

export default NotFoundPage
