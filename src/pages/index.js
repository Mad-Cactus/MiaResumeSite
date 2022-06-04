import React from "react"
import Layout from "../components/Layout"
import { ReactNotifications } from "react-notifications-component"
import "react-notifications-component/dist/theme.css"
import Welcome from "../components/Welcome"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Education from "../components/Education"
import PhotoList from "../components/PhotoList"
import Hobbies from "../components/Hobbies"
import Contact from "../components/Contact"
import "../css/index.css"

const IndexPage = () => {
  return (
    <Layout>
      <ReactNotifications />
      <Welcome />
      <Skills />
      <Experience />
      <Education />
      <Hobbies />
      <PhotoList />
      <Contact />
    </Layout>
  )
}

export default IndexPage
