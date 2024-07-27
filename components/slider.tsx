"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { useSliderContext } from "../lib/slider-context";

export default function Slider({
  id,
  containerClass,
  panelClass,
  type,
  children,
}) {
  const sliderObjects = useSliderContext();

  const leftButton = useRef<HTMLInputElement | null>(null);
  const rightButton = useRef<HTMLInputElement | null>(null);
  const [xpos, setXpos] = useState<number>(0);
  const [leftButtonClasses, setLeftButtonClasses] = useState<string>(
    "left-button slider-button"
  );
  const [rightButtonClasses, setRightButtonClasses] = useState<string>(
    "right-button slider-button"
  );
  const currIndex = useRef<number>(0);

  const REVIEWS: string = "reviews";

  const setButtonStates = () => {
    setLeftButtonClasses("left-button slider-button hide");
    setRightButtonClasses("right-button slider-button hide");

    if (currIndex.current === 0) {
      setLeftButtonClasses("left-button slider-button disabled");
    } else if (currIndex.current === sliderObjects.length - 1) {
      setRightButtonClasses("right-button slider-button disabled");
    }
  };

  useEffect(() => {
    setButtonStates();

    if (sliderObjects.length <= 1) {
      setLeftButtonClasses("left-button slider-button hide");
      setRightButtonClasses("right-button slider-button hide");
    }
  }, []);

  const onLeftClick = () => {
    if (currIndex.current > 0) {
      currIndex.current--;
      let xposVal = xpos;
      if (type === REVIEWS) {
        setXpos((xposVal += 100 / sliderObjects.length));
      } else {
        setXpos((xposVal += 100));
      }
    }
    setButtonStates();
  };

  const onRightClick = () => {
    if (currIndex.current < sliderObjects.length - 1) {
      currIndex.current++;
      let xposVal = xpos;
      if (type === REVIEWS) {
        setXpos((xposVal -= 100 / sliderObjects.length));
      } else {
        setXpos((xposVal -= 100));
      }
    }
    setButtonStates();
  };

  return (
    <div id={id} className={containerClass}>
      <div
        ref={leftButton}
        className={leftButtonClasses}
        onClick={() => onLeftClick()}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div
        ref={rightButton}
        className={rightButtonClasses}
        onClick={() => onRightClick()}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div
        className={panelClass}
        style={{
          width: `${sliderObjects.length * 100}%`,
          transform: `translateX(${xpos}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
