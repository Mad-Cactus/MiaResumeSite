import React from "react"
import { Fade } from "react-awesome-reveal"
import "./Education.css"

const Education = () => {
  return (
    <div
      style={{
        background: "rgb(127,0,255)",
        background:
          "linear-gradient(90deg, rgba(127,0,255,1) 0%, rgba(153,153,204,1) 100%)",
      }}
    >
      <div
        className="uk-flex uk-flex-row uk-flex-center uk-flex-wrap"
        id="education-container"
      >
        <div style={{ margin: "3rem 0" }}>
          <Fade direction="left">
            <h2 style={{ color: "white" }}>
              <span style={{ color: "black" }}>-</span> My Education
            </h2>
          </Fade>
        </div>
        <div
          className="uk-flex uk-flex-row, uk-flex-middle uk-flex-1"
          id="education-inner"
        >
          <div style={{ margin: "auto" }}>
            <div
              style={{ padding: "4rem", margin: "auto" }}
              className="uk-flex uk-flex-row"
            >
              <div>
                <h1 style={{ color: "white", fontWeight: "600" }}>
                  Hamilton Southeastern High School
                </h1>
                <h3 style={{ color: "white" }}>Fishers, Indiana</h3>
                <h4 style={{ color: "white" }}>GPA: 4.4</h4>
                <h4 style={{ color: "white" }}>
                  <ul
                    style={{
                      color: "white",
                      fontWeight: "600",
                      lineHeight: "1.9rem",
                    }}
                  >
                    <li>Vice-President of Calligraphy Club</li>
                    <li>Key Club Member</li>
                    <li>National Honors Society Member</li>
                    <li>Orchestra</li>
                  </ul>
                </h4>
              </div>
            </div>
            <div
              style={{ padding: "4rem", margin: "auto" }}
              className="uk-flex uk-flex-row"
            >
              <div>
                <h1 style={{ color: "white", fontWeight: "600" }}>
                  Indiana University Bloomington
                </h1>
                <h3 style={{ color: "white" }}>Bloomington, Indiana</h3>
                <h4 style={{ color: "white" }}>GPA: 3.75</h4>
                <h4 style={{ color: "white" }}>
                  <ul
                    style={{
                      color: "white",
                      fontWeight: "600",
                      lineHeight: "1.9rem",
                    }}
                  >
                    <li>Direct-Admit to Kelley School of Business</li>
                    
                  </ul>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
