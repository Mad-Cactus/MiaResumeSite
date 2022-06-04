import React from "react"
import Mia1 from "../../images/Mia_H-73.png"
import Mia2 from "../../images/Mia_H-18.png"
import Mia3 from "../../images/Mia_H-26.png"
import Carousel from "nuka-carousel"
import "./PhotoList.css"

const PhotoList = () => {
  return (
    <div className="uk-flex uk-flex-row uk-flex-center">
      <div id="photo-list-large">
        <Carousel
          autoplay
          wrapAround
          slidesToShow={3}
          withoutControls
          style={{
            background: "rgb(127,0,255)",
            background:
              "linear-gradient(90deg, rgba(127,0,255,1) 0%, rgba(153,153,204,1) 100%)",
          }}
        >
          <div style={{ padding: "1rem" }}>
            <img src={Mia1} alt="" />
          </div>
          <div style={{ padding: "1rem" }}>
            <img src={Mia2} alt="" />
          </div>
          <div style={{ padding: "1rem" }}>
            <img src={Mia3} alt="Mia Howard" />
          </div>
        </Carousel>
      </div>
      <div id="photo-list-med">
        <Carousel
          autoplay
          wrapAround
          slidesToShow={2}
          withoutControls
          style={{
            background: "rgb(127,0,255)",
            background:
              "linear-gradient(90deg, rgba(127,0,255,1) 0%, rgba(153,153,204,1) 100%)",
          }}
        >
          <div style={{ padding: "1rem" }}>
            <img src={Mia1} alt="" />
          </div>
          <div style={{ padding: "1rem" }}>
            <img src={Mia2} alt="" />
          </div>
          <div style={{ padding: "1rem" }}>
            <img src={Mia3} alt="Mia Howard" />
          </div>
        </Carousel>
      </div>
      <div id="photo-list-small">
        <Carousel
          autoplay
          wrapAround
          slidesToShow={1}
          withoutControls
          style={{
            background: "rgb(127,0,255)",
            background:
              "linear-gradient(90deg, rgba(127,0,255,1) 0%, rgba(153,153,204,1) 100%)",
          }}
        >
          <div style={{ padding: "1rem" }}>
            <img src={Mia1} alt="" />
          </div>
          <div style={{ padding: "1rem" }}>
            <img src={Mia2} alt="" />
          </div>
          <div style={{ padding: "1rem" }}>
            <img src={Mia3} alt="Mia Howard" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default PhotoList
