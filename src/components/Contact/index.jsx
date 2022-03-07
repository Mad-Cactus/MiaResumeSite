import React from "react"
import { Store } from "react-notifications-component"
import emailjs from "@emailjs/browser"
import { Fade } from "react-reveal"

const Contact = () => {
  const sendEmail = e => {
    e.preventDefault()
    emailjs.init(process.env.GATSBY_MAIL_ID)
    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        "#contact_email"
      )
      .then(res => {
        console.log("SUCCESS!", res.status, res.text)
        Store.addNotification({
          title: "Success",
          message: "Email Sent!",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        })
      })
      .catch(e => {
        console.log("FAILED...", e)
        Store.addNotification({
          title: "Error",
          message: "Email failed to send, please try again",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        })
      })
  }
  return (
    <div
      id="contact"
      style={{
        background: "rgb(127,0,255)",
        background:
          "linear-gradient(90deg, rgba(127,0,255,1) 0%, rgba(153,153,204,1) 100%)",
        padding: "2rem",
        margin: "0",
      }}
    >
      <Fade bottom>
        <form
          style={{ width: "80%", margin: "7rem", color: "white" }}
          id="contact_email"
          onSubmit={e => sendEmail(e)}
        >
          <fieldset className="uk-fieldset">
            <h1 style={{ color: "white" }}>
              <span style={{ color: "black" }}>-</span> Contact Me
            </h1>
          </fieldset>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="text"
              id="name"
              placeholder="Name"
              name="from_name"
              required
            />
          </div>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="email"
              id="email"
              placeholder="Email Address"
              name="reply_to"
              required
            />
          </div>
          <div className="uk-margin">
            <textarea
              className="uk-textarea"
              rows="5"
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button
            className="uk-button uk-button-default"
            type="submit"
            style={{ background: "white" }}
          >
            Submit
          </button>
        </form>
      </Fade>
    </div>
  )
}

export default Contact
