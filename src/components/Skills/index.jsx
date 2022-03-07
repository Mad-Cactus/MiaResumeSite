import React from "react"
import { Fade } from "react-reveal"

const Skills = () => {
  return (
    <div
      style={{ color: "#7f00ff" }}
      className="uk-flex uk-flex-middle uk-flex-center"
    >
      <div style={{ maxWidth: "50%", margin: "3rem"}}>
        <Fade left>
          <h1>
            <span style={{ color: "#7f00ff" }}>-</span> My Background
          </h1>
        </Fade>
        <Fade left delay={500}>
          <p style={{ fontSize: "2rem", marginLeft: "1.7rem" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            voluptatem, culpa doloribus neque praesentium perferendis sunt
            labore iste rem ea tempore, consectetur quisquam impedit
            dignissimos? Distinctio voluptates enim animi doloremque.
          </p>
        </Fade>
      </div>
      <div style={{ maxWidth: "50%", margin: "3rem" }}>
        <Fade right>
          <h1>
            <span style={{ color: "#7f00ff" }}>-</span> My Skills
          </h1>
        </Fade>
        <Fade right delay={500}>
          <ul
            style={{
              listStyleType: "none",
              fontSize: "2rem",
              lineHeight: "3rem",
            }}
          >
            <li>Customer Service</li>
            <li>Training</li>
            <li>Presentations</li>
            <li>Project Management</li>
            <li>Problem Solving</li>
          </ul>
        </Fade>
      </div>
    </div>
  )
}

export default Skills
