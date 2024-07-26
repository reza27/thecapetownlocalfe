"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";

export default function ImageSlider(props) {
  const { images, id } = props;
  const leftButton = useRef<HTMLInputElement | null>(null);
  const rightButton = useRef<HTMLInputElement | null>(null);
  const [xpos, setXpos] = useState<number>(0);
  const currIndex = useRef<number>(0);

  //let currIndex = 0;
  const sliderStyle = {
    width: images.length * 100 + "%",
  };

  const setButtonStates = () => {
    leftButton.current?.classList.remove("disabled");
    rightButton.current?.classList.remove("disabled");

    if (currIndex.current === 0) {
      leftButton.current?.classList.add("disabled");
    } else if (currIndex.current === images.length - 1) {
      rightButton.current?.classList.add("disabled");
    }
  };

  useEffect(() => {
    setButtonStates();

    if (images.length <= 1) {
      $("#" + id)
        .find(".left-button")
        .hide();
      $("#" + id)
        .find(".right-button")
        .hide();
    }
  }, []);

  const onLeftClick = () => {
    if (currIndex.current > 0) {
      currIndex.current--;
      let xposVal = xpos;
      setXpos((xposVal += 100));
    }
    setButtonStates();
  };

  const onRightClick = () => {
    if (currIndex.current < images.length - 1) {
      currIndex.current++;
      let xposVal = xpos;
      setXpos((xposVal -= 100));
    }
    setButtonStates();
  };

  return (
    <div id={id} className="image-slider">
      <div
        ref={leftButton}
        className="left-button slider-button"
        onClick={() => onLeftClick()}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div
        ref={rightButton}
        className="right-button slider-button"
        onClick={() => onRightClick()}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div
        className="panel-images-slider"
        style={{
          width: images.length * 100 + "%",
          transform: `translateX(${xpos}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={image.id + "-" + index}
            className="panel-image"
            style={{
              backgroundImage: "url(" + image?.image?.publicUrl + ")",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
