import React, { useState } from "react";
import "./HeroCarousel.scss";
import Picture from "./../../Atoms/Picture/Picture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const HeroCarousel = ({ slides, showCaption, captionAlignment }) => {
  const [currSlide, setCurrSlide] = useState(1);
  /**
   * Method to set the current slide
   */
  const currentSlide = (slide) => {
    setCurrSlide(slide);
  };
  /**
   * Method to handle prev slide
   */
  const prevSlide = () => {
    let cnt = 0;
    currSlide === 1 ? (cnt += slides.length) : (cnt += currSlide - 1);
    currentSlide(cnt);
  };

  /**
   * Method to handle next slide
   */
  const nextSlide = () => {
    let cnt = 0;
    currSlide === slides.length ? (cnt += 1) : (cnt += currSlide + 1);
    currentSlide(cnt);
  };
  return (
    <div className={"c-slidecontainer"}>

      <div className={"c-slidecontainer__dots"}>
        {slides.map((slide, index) => {
          return (
            <span
              key={index}
              className={[
                "c-slidecontainer__dots__dot",
                currSlide === index + 1
                  ? "c-slidecontainer__dots__active"
                  : " ",
              ].join(" ")}
              onClick={() => currentSlide(index + 1)}
            >{index + 1}</span>
          );
        })}
      </div>

      <div className={"c-slidecontainer__slider"}>
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={[
                "c-slidecontainer__slider__slide fade",
                currSlide === index + 1
                  ? "c-slidecontainer__slider__show"
                  : "c-slidecontainer__slider__hide",
              ].join(" ")}
            >
              <Picture
                props={slide}
                child={true}
              />
            </div>
          );
        })}
        <div
          className={[
            "c-slidecontainer__slider__prevnext",
            "d-flex justify-content-between",
          ].join(" ")}
        >
          
        </div>
      </div>

    </div>
  );
};

export default HeroCarousel;
