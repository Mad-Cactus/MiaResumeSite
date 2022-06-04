import React from "react"
import { Store } from "react-notifications-component"
import emailjs from "@emailjs/browser"
import { Fade } from "react-awesome-reveal"

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
      <Fade direction="down">
        <form
          style={{ maxWidth: "80%", margin: "auto", color: "white" }}
          id="contact_email"
          onSubmit={e => sendEmail(e)}
        >
          <fieldset className="uk-fieldset">
            <h2 style={{ color: "white" }}>
              <span style={{ color: "black" }}>-</span> Contact Me
            </h2>
          </fieldset>
          <div className="uk-margin">
            <input
              className="uk-input"
              style={{
                borderRadius: "40px",
                padding: "1rem",
                paddingBottom: "1.15rem",
              }}
              type="text"
              id="name"
              placeholder="Name"
              name="from_name"
              required
            />
          </div>
          <div className="uk-margin">
            <input
              style={{
                borderRadius: "40px",
                padding: "1rem",
                paddingBottom: "1.15rem",
              }}
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
              rows={3}
              id="message"
              name="message"
              style={{
                borderRadius: "20px",
                padding: "0.8rem",
              }}
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button
            className="uk-button uk-button-default"
            type="submit"
            style={{
              background: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "20px",
            }}
          >
            Submit
          </button>
        </form>
        <div></div>
      </Fade>
    </div>
  )
}

export default Contact
