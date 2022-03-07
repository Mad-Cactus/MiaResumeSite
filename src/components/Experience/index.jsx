import React from "react"
import { Fade } from "react-reveal"
import "./Experience.css"

const Experience = () => {
  return (
    <section
      className="experience pt-100 pb-100 "
      id="experience"
      style={{ maxWidth: "75%", margin: "auto" }}
    >
      <Fade left>
        <h1 style={{ marginBottom: "5rem" }}>
          <span style={{ color: "#7f00ff" }}>-</span> My Experience
        </h1>
      </Fade>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <ul className="timeline-list">
              <Fade left>
                <li>
                  <div className="timeline_content">
                    <span>2019</span>
                    <h4>Summer Legal Intern</h4>
                    <p>
                      Answering phones, filed, prospect intake and scheduling,
                      observed court room proceedings. Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Alias accusantium
                      deleniti aliquam temporibus natus molestiae corrupti. Amet
                      sint repellat eius provident? Quod voluptatum, alias
                      aspernatur reiciendis libero vitae est? Eos.
                    </p>
                  </div>
                </li>
              </Fade>
              <Fade right>
                <li>
                  <div className="timeline_content">
                    <span>2020 - Present</span>
                    <h4>Shift Lead</h4>
                    <p>
                      Trained new employees, led closing team, responsible for
                      customer service interactions, prepped food, problem
                      solved as needed during shift. Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Accusantium maiores,
                      distinctio illum ipsa illo eaque consequatur provident
                      cupiditate modi at maxime itaque quod eius voluptatem
                      molestiae incidunt ea quidem nobis.
                    </p>
                  </div>
                </li>
              </Fade>
              <Fade left>
                <li>
                  <div className="timeline_content">
                    <span>2021 - Present</span>
                    <h4>Crew Member</h4>
                    <p>
                      Responsible for customer service interactions, prepped
                      food, cleaned seating area, performed closing duties.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Earum, vitae mollitia, ipsam quos quidem illo atque cum,
                      ut officiis debitis similique alias. Esse, officia
                      obcaecati dicta officiis consequuntur laborum. Ex.
                    </p>
                  </div>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
