import React from "react"
import { Fade } from "react-awesome-reveal"
import "./Skills.css"

const Skills = () => {
  return (
    <div
      style={{ color: "#7f00ff" }}
      className="uk-flex uk-flex-center uk-flex-wrap"
    >
      <div className="skills-box">
        <Fade direction="left">
          <h2>
            <span style={{ color: "#7f00ff" }}>-</span> My Background
          </h2>
        </Fade>
        <Fade direction="left" delay={500}>
          <p style={{ fontSize: "2rem" }} id="p-margin">
            <span style={{ fontWeight: "bold" }}>
              Hi!<span>{"   "}👋</span>
            </span>
            <br />
            I'm Mia Howard, a freshman at Indiana University studying business
            and management at the Kelly School of Business. I have a custom
            embroidery business here in Indiana and I love combining creativity
            and business. I am a dedicated, responsible and independent leader
            due to my previous experience in the food industry and beyond.
          </p>
        </Fade>
      </div>
      <div className="skills-box">
        <Fade direction="right">
          <h2>
            <span style={{ color: "#7f00ff" }}>-</span> My Skills
          </h2>
        </Fade>
        <Fade direction="right" delay={500}>
          <ul
            style={{
              listStyleType: "none",
              fontSize: "2rem",
            }}
            id="skills"
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
