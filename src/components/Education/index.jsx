import React from "react"
import Mia1 from "../../images/Mia_H-73.jpg"

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
          <div style={{ padding: "5rem" }}>
            <h1 style={{ color: "white", fontWeight: "600" }}>
              ★ Hamilton Southeastern High School
            </h1>
            <h4 style={{ color: "white", maxWidth: "60%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, consequatur. Harum autem iure dolores pariatur, vitae
              magni natus recusandae enim, cum hic, aliquam sequi deleniti
              facere asperiores. Aliquam, voluptates fugiat?
            </h4>
          </div>
          <div style={{ padding: "5rem" }}>
            <h1 style={{ color: "white", fontWeight: "600" }}>
              ★ Miami Oxford Unviersity
            </h1>
            <h4 style={{ color: "white", maxWidth: "60%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, consequatur. Harum autem iure dolores pariatur, vitae
              magni natus recusandae enim, cum hic, aliquam sequi deleniti
              facere asperiores. Aliquam, voluptates fugiat?
            </h4>
          </div>
        </div>
        {/* <img
          style={{
            borderRadius: "50px",
            maxWidth: "30rem",
            margin: "auto ",
            border: "white solid 5px",
            padding: "1rem",
          }}
          src={Mia1}
          alt=""
        /> */}
      </div>
    </div>
  )
}

export default Education
