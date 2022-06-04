import React from "react"
import { Fade } from "react-awesome-reveal"
import { Icon } from "@iconify/react"
import Hover from "../Hover"
import Mia5 from "../../images/Mia_H-43.png"
import "./Hobbies.css"

const Hobbies = () => {
  return (
    <div
      className="uk-flex uk-flex-row uk-flex-center uk-flex-wrap"
      id="hobby-container"
    >
      <div style={{ margin: "3rem 0" }}>
        <Fade direction="left">
          <h2>
            <span style={{ color: "#7f00ff" }}>-</span> My Interests
          </h2>
        </Fade>
      </div>
      <div
        className="uk-flex uk-flex-row uk-flex-middle uk-flex-wrap"
        id="hobby-inner"
      >
        <ul
          className="uk-flex uk-flex-wrap"
          id="hobby-list"
          style={{
            color: "#7f00ff",
            listStyleType: "none",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          <li className="hobby-hover">
            <Hover>
              <div>
                <Icon
                  icon="ic:sharp-sports-soccer"
                  style={{ margin: "0.6rem" }}
                />
                Soccer
              </div>
              <p style={{ color: "#212529" }}>
                I have been playing soccer for 10 years!
              </p>
            </Hover>
          </li>
          <li className="hobby-hover">
            <Hover>
              <div>
                <Icon
                  icon="ic:outline-ice-skating"
                  style={{ margin: "0.6rem" }}
                />
                Ice Skating
              </div>
              <p
                style={{
                  color: "#212529",
                }}
              >
                I have been ice skating since I was a child!
              </p>
            </Hover>
          </li>
          <li className="hobby-hover">
            <Hover>
              <Icon icon="ph:needle-light" style={{ margin: "0.6rem" }} />
              Embroidery
              <p style={{ color: "#212529" }}>
                I run my own embroidery business, check out my
                <a href="https://instagram.com/totelly.yours?igshid=YmMyMTA2M2Y=">
                  {" "}
                  Instagram
                </a>
              </p>
            </Hover>
          </li>
          <li className="hobby-hover">
            <Hover>
              <Icon
                icon="fluent:movies-and-tv-16-regular"
                style={{ margin: "0.6rem" }}
              />
              Cinema
              <p style={{ color: "#212529" }}>
                I'm a movie buff and used to sign opera!
              </p>
            </Hover>
          </li>
          <li className="hobby-hover">
            <Hover>
              <Icon icon="ep:reading" style={{ margin: "0.6rem" }} />
              Reading
              <p style={{ color: "#212529" }}>
                My favorite author is Jodi Picoult!
              </p>
            </Hover>
          </li>
          <li className="hobby-hover" style={{ marginBottom: "5rem" }}>
            <Hover>
              <Icon icon="bxs:business" style={{ margin: "0.6rem" }} />
              Business
              <p style={{ color: "#212529" }}>
                I run my own embroidery business and are majoring in the
                business field!
              </p>
            </Hover>
          </li>
        </ul>
        <img id="hobbies-photo" src={Mia5} alt="" style={{ maxWidth: "33%" }} />
      </div>
      {/* <div style={{ right: "0px", top: "3500px", position: "absolute" }}>
        <Fade direction="right">
          <Icon
            icon="ant-design:star-filled"
            style={{
              width: "300px",
              transform: "rotate(40deg)",
            }}
            color="#7f00ff"
          />
        </Fade>
      </div>
      <div style={{ right: "50px", top: "3550px", position: "absolute" }}>
        <Fade direction="right">
          <Icon
            icon="ant-design:star-filled"
            style={{
              width: "200px",
              transform: "rotate(40deg)",
            }}
            color="#fff"
          />
        </Fade>
      </div>
      <div style={{ right: "1900px", top: "3750px", position: "absolute" }}>
        <Fade direction="left">
          <Icon
            icon="ant-design:star-filled"
            style={{
              width: "200px",
              transform: "rotate(40deg)",
            }}
            color="#7f00ff"
          />
        </Fade>
      </div>
      <div style={{ right: "1940px", top: "3785px", position: "absolute" }}>
        <Fade direction="left">
          <Icon
            icon="ant-design:star-filled"
            style={{
              width: "125px",
              transform: "rotate(40deg)",
            }}
            color="#fff"
          />
        </Fade>
      </div>
      <div style={{ right: "1840px", top: "3900px", position: "absolute" }}>
        <Fade direction="left">
          <Icon
            icon="ant-design:star-filled"
            style={{
              width: "150px",
              transform: "rotate(40deg)",
            }}
            color="#7f00ff"
          />
        </Fade>
      </div>
      <div style={{ right: "1865px", top: "3925px", position: "absolute" }}>
        <Fade direction="left">
          <Icon
            icon="ant-design:star-filled"
            style={{
              width: "100px",
              transform: "rotate(40deg)",
            }}
            color="#fff"
          />
        </Fade>
      </div> */}
    </div>
  )
}

export default Hobbies
