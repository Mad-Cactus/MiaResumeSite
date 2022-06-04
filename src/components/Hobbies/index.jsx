import React from "react"
import { Fade } from "react-awesome-reveal"
import { Icon } from "@iconify/react"
import "./Hobbies.css"

const Hobbies = () => {
  return (
    <main class="grid">
      <section class="content item1">
        <div style={{ margin: "3rem 0" }}>
          <Fade direction="left">
            <h2>
              <span style={{ color: "#7f00ff" }}>-</span> My Interests
            </h2>
          </Fade>
        </div>
      </section>
      <section class="hobby-card item2">
        <h2 style={{ color: "white" }}>
          <Icon icon="ic:sharp-sports-soccer" style={{ margin: "0.6rem" }} />
          Soccer
        </h2>
        <h4 style={{ color: "white" }}>
          I have been playing soccer for 10 years!
        </h4>
      </section>
      <section class="hobby-card item3"></section>
      <section class="hobby-card item4"></section>
      <section class="hobby-card item5">
        <h2
          style={{
            color: "white",
          }}
        >
          <Icon icon="ic:outline-ice-skating" style={{ margin: "0.6rem" }} />
          Ice Skating
        </h2>
        <h4
          style={{
            color: "white",
          }}
        >
          I have been ice skating since I was a child!
        </h4>
      </section>
      <section class="hobby-card item7"></section>
      <section class="hobby-card item8">
        <h2 style={{ color: "white" }}>
          <Icon icon="ep:reading" style={{ margin: "0.6rem" }} />
          Reading
        </h2>
        <h4 style={{ color: "white" }}>My favorite author is Jodi Picoult!</h4>
      </section>
      <section class="hobby-card item9">
        <h2 style={{ color: "white" }}>
          <Icon
            icon="fluent:movies-and-tv-16-regular"
            style={{ margin: "0.6rem" }}
          />
          Cinema
        </h2>
        <h4 style={{ color: "white" }}>
          I'm a huge movie buff, my favorites are rom-coms and thrillers
        </h4>
      </section>
      <section class="hobby-card item10">
        <h2 style={{ color: "white" }}>
          <Icon icon="bxs:business" style={{ margin: "0.6rem" }} />
          Business
        </h2>
        <h4 style={{ color: "white" }}>
          I run my own embroidery business and am majoring in the business!
        </h4>
      </section>
      <section class="hobby-card item11">
        <h2 style={{ color: "white" }}>
          <Icon icon="ph:needle-light" style={{ margin: "0.6rem" }} />
          Embroidery
        </h2>
        <h4 style={{ color: "white" }}>
          I run my own embroidery business, check out my
          <a href="https://instagram.com/totelly.yours?igshid=YmMyMTA2M2Y=">
            {" "}
            Instagram
          </a>
        </h4>
      </section>
    </main>
  )
}

export default Hobbies
