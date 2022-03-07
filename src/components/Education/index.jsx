import React from "react"

const Education = () => {
  return (
    <div
      style={{
        background: "rgb(127,0,255)",
        background:
          "linear-gradient(90deg, rgba(127,0,255,1) 0%, rgba(153,153,204,1) 100%)",
      }}
    >
      <div className="uk-flex uk-flex-row, uk-flex-middle">
        <div>
          <div
            style={{ padding: "4rem", maxWidth: "87%", margin: "auto" }}
            className="uk-flex uk-flex-row"
          >
            <div style={{ maxWidth: "70%" }}>
              <h1 style={{ color: "white", fontWeight: "600" }}>
                <span style={{ color: "black" }}>-</span> Hamilton Southeastern
                High School
              </h1>
              <h4 style={{ color: "white", maxWidth: "60%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, consequatur. Harum autem iure dolores pariatur,
                vitae magni natus recusandae enim, cum hic, aliquam sequi
                deleniti facere asperiores. Aliquam, voluptates fugiat?
              </h4>
            </div>
            <div>
              <h2 style={{ color: "white", fontWeight: "600" }}>
                <span style={{ color: "black" }}>-</span> Activities
              </h2>
              <ul
                style={{
                  listStyleType: "none",
                  color: "white",
                  fontWeight: "600",
                  lineHeight: "1.9rem",
                }}
              >
                <li>Vice-President of Calligraphy Club</li>
                <li>Key Club Member</li>
                <li>National Honors Society Member</li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div
            style={{ padding: "4rem", maxWidth: "87%", margin: "auto" }}
            className="uk-flex uk-flex-row"
          >
            <div style={{ maxWidth: "70%" }}>
              <h1 style={{ color: "white", fontWeight: "600" }}>
                <span style={{ color: "black" }}>-</span> Indiana University
              </h1>
              <h4 style={{ color: "white", maxWidth: "60%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, consequatur. Harum autem iure dolores pariatur,
                vitae magni natus recusandae enim, cum hic, aliquam sequi
                deleniti facere asperiores. Aliquam, voluptates fugiat?
              </h4>
            </div>
            <div>
              <h2 style={{ color: "white", fontWeight: "600" }}>
                <span style={{ color: "black" }}>-</span> Activities
              </h2>
              <ul
                style={{
                  listStyleType: "none",
                  color: "white",
                  fontWeight: "600",
                  lineHeight: "1.9rem",
                }}
              >
                <li>Direct-Admit to Kelley School of Business</li>
                <li>Competing Debate Club Member</li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
