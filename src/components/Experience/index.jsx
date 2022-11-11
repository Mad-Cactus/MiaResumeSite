import React from "react"
import { Fade } from "react-awesome-reveal"
import "./Experience.css"

const Experience = () => {
  return (
    <div
      className="pt-100 pb-100 uk-flex uk-flex-center uk-flex-wrap"
      id="experience"
    >
      <div style={{ margin: "3rem" }}>
        <Fade direction="left">
          <h2>
            <span style={{ color: "#7f00ff" }}>-</span> My Experience
          </h2>
        </Fade>
      </div>
      <div id="timeline_container">
        <div className="row" style={{ maxWidth: "75%", margin: "auto" }}>
          <div className="col-xl-12">
            <ul className="timeline-list">
              <Fade direction="left">
                <li>
                  <div className="timeline_content">
                    <span>2019</span>
                    <h4>Summer Legal Intern</h4>
                    <p>
                      Answering phones, filed, prospect intake and scheduling,
                      observed court room proceedings. Directed and talked to
                      clients while in office. Filed and reserved meeting times,
                      spectated court room appearences.
                    </p>
                  </div>
                </li>
              </Fade>
              <Fade direction="right">
                <li>
                  <div className="timeline_content">
                    <span>2020 - 2021</span>
                    <h4>Shift Lead</h4>
                    <p>
                      Trained new employees, led closing team, responsible for
                      customer service interactions, prepped food, problem
                      solved as needed during shift. Helped open and run store
                      by myself, helped increase productivity among fellow
                      coworkers and with customer and staff interactions.
                    </p>
                  </div>
                </li>
              </Fade>
              <Fade direction="left">
                <li>
                  <div className="timeline_content">
                    <span>2021 - 2022</span>
                    <h4>Crew Member</h4>
                    <p>
                      Responsible for customer service interactions, prepped
                      food, cleaned seating area, performed closing duties. Kept
                      track of sales during closing periods, helped open and
                      take inventory throughout store. Helped guests with their
                      orders and deliver food in a timely manner.
                    </p>
                  </div>
                </li>
              </Fade>
              <Fade direction="right">
                <li>
                  <div className="timeline_content">
                    <span>2021 - 2022</span>
                    <h4>Crew Member</h4>
                    <p>
                      Kept working environment clean, helped communication
                      between other coworkers about necessary precautions and
                      care with new dogs. Helped train and stop fighting between
                      dogs. Gave suggestions for improving safety and
                      instruction of pets while in care.
                    </p>
                  </div>
                </li>
              </Fade>
              <Fade direction="left">
                <li>
                  <div className="timeline_content">
                    <span>2022 - Present</span>
                    <h4>Test Proctor</h4>
                    <p>
                      Proctored exams for students with disabilities, provided
                      accommodations for students who needed them, filed and
                      organized exams, worked directly with students to ensure a
                      positive experience.
                    </p>
                  </div>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
