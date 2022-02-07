import React, { useEffect } from "react"
import Mia1 from "../../images/Mia_H-47.png"
import Mia2 from "../../images/Mia_H-44.png"
import Mia3 from "../../images/Mia_H-45.png"
import Mia4 from "../../images/Mia_H-46.png"
import Fade from "react-reveal/Fade"
import { Icon } from "@iconify/react"
import "./Welcome.css"

const Welcome = () => {
  useEffect(() => {
    let frames = document.getElementById("animation").children
    let frameCount = frames.length
    let i = 0
    setTimeout(function () {
      frames[i % frameCount].style.display = "none"
      frames[++i % frameCount].style.display = "block"
    }, 1000)
    setTimeout(function () {
      frames[i % frameCount].style.display = "none"
      frames[++i % frameCount].style.display = "block"
    }, 2000)
    setTimeout(function () {
      frames[i % frameCount].style.display = "none"
      frames[++i % frameCount].style.display = "block"
    }, 3000)
  }, [])

  return (
    <div
      id="welcome"
      className="uk-flex uk-flex uk-flex-row"
      style={{
        minHeight: "100%",
        background: "rgb(127,0,255)",
        background:
          "linear-gradient(90deg, rgba(127,0,255,1) 0%, rgba(153,153,204,1) 100%)",
      }}
    >
      <Fade left>
        <div
          style={{
            background: "#7f00ff",
            maxWidth: "60%",
            minHeight: "55.5rem",
          }}
        >
          <h1
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "6.5rem",
              margin: "5rem",
            }}
          >
            Hi! I'm Mia Howard
          </h1>
          <h2
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "4rem",
              maxWidth: '50%',
              margin: "5rem",
            }}
          >
            Business and Management Student
          </h2>
          <button
            className="uk-button"
            style={{
              background: "rgba(153,153,204,1)",
              color: "white",
              margin: "0 5rem",
              fontWeight: "600",
              borderRadius: "15px",
              fontSize: "1.4rem",
              padding: "0.5rem",
              width: "14rem",
            }}
          >
            Contact Me
          </button>
        </div>
      </Fade>
      <div
        id="animation"
        style={{ maxWidth: "40%", position: "absolute", right: "300px" }}
      >
        <img src={Mia1} alt="" />
        <img src={Mia2} alt="" />
        <img src={Mia3} alt="" />
        <img src={Mia4} alt="" />
      </div>
      <Fade right>
        <div style={{ position: "absolute", right: "-100px" }}>
          <Icon
            icon="ant-design:star-filled"
            style={{
              width: "400px",
              transform: "rotate(40deg)",
            }}
            color="#fff"
          />
        </div>
      </Fade>
      <Fade right>
        <div style={{ position: "absolute", right: "-50px", top: "50px" }}>
          <Icon
            icon="ant-design:star-filled"
            style={{
              width: "300px",
              transform: "rotate(40deg)",
            }}
            color="#7f00ff"
          />
        </div>
      </Fade>
      <Fade right>
        <div style={{ position: "absolute", right: "55px", top: "365px" }}>
          <Icon
            icon="ant-design:star-filled"
            style={{
              width: "270px",
              transform: "rotate(40deg)",
            }}
            color="white"
          />
        </div>
      </Fade>
      <Fade right>
        <div style={{ position: "absolute", right: "90px", top: "400px" }}>
          <Icon
            icon="ant-design:star-filled"
            style={{
              width: "200px",
              transform: "rotate(40deg)",
            }}
            color="#7f00ff"
          />
        </div>
      </Fade>
      <Fade right>
        <div style={{ position: "absolute", right: "36px", top: "575px" }}>
          <Icon
            icon="ant-design:star-filled"
            style={{
              width: "150px",
              transform: "rotate(40deg)",
            }}
            color="white"
          />
        </div>
      </Fade>
      <Fade right>
        <div style={{ position: "absolute", right: "60px", top: "600px" }}>
          <Icon
            icon="ant-design:star-filled"
            style={{
              width: "100px",
              transform: "rotate(40deg)",
            }}
            color="#7f00ff"
          />
        </div>
      </Fade>
    </div>
  )
}

export default Welcome
