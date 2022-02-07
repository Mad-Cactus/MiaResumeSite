import React from "react"
import Layout from "../components/Layout"
import Welcome from "../components/Welcome"
import Experience from "../components/Experience"
import Education from "../components/Education"
import "../css/index.css"

const IndexPage = () => {
  return (
    <Layout>
      <Welcome />
      <Experience />
      <Education />
    </Layout>
  )
}

export default IndexPage
