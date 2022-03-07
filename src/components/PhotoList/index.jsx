import React from "react"
import Mia1 from "../../images/Mia_H-73.png"
import Mia2 from "../../images/Mia_H-18.png"
import Mia3 from "../../images/Mia_H-26.png"
import { Fade } from "react-reveal"

const PhotoList = () => {
  return (
    <div className="uk-flex uk-flex-row uk-flex-center uk-flex-wrap">
      <Fade left>
        <img
          src={Mia1}
          alt=""
          style={{
            maxWidth: "31%",
            borderRadius: "2rem",
            margin: "1rem",
          }}
        />
      </Fade>
      <Fade>
        <img
          src={Mia2}
          alt=""
          style={{
            maxWidth: "31%",
            borderRadius: "3rem",
            margin: "1rem",
          }}
        />
      </Fade>
      <Fade right>
        <img
          src={Mia3}
          alt="Mia Howard"
          style={{
            maxWidth: "31%",
            borderRadius: "2rem",
            margin: "1rem",
          }}
        />
      </Fade>
    </div>
  )
}

export default PhotoList
