"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useSliderContext } from "../lib/contexts/slider-context";
import { IGoogleReview } from "../types/IGoogleReview";

export default function Slider({
  id,
  containerClass,
  panelClass,
  type,
  children,
}) {
  const REVIEWS: string = "reviews";

  const sliderObjects = useSliderContext();

  const leftButton = useRef<HTMLElement | null>(null);
  const rightButton = useRef<HTMLElement | null>(null);

  interface State {
    currentIndex: number;
    xpos: number;
    leftButtonClasses: string;
    rightButtonClasses: string;
  }

  interface Action {
    actionType: "increment" | "decrement" | "hideButtons";
  }

  const reducer = (state: State, action: Action) => {
    const { actionType } = action;

    switch (actionType) {
      case "increment": {
        const newIndex = state.currentIndex + 1;
        const xPosVal =
          type === REVIEWS
            ? state.xpos - 100 / sliderObjects.length
            : state.xpos - 100;

        return {
          ...state,
          currentIndex: newIndex,
          xpos: xPosVal,
          rightButtonClasses:
            newIndex === sliderObjects.length - 1
              ? "right-button slider-button disabled rounded-3xl"
              : "right-button slider-button",
          leftButtonClasses: "left-button slider-button rounded-3xl",
        };
      }
      case "decrement": {
        const newIndex = state.currentIndex - 1;
        const xPosVal =
          type === REVIEWS
            ? state.xpos + 100 / sliderObjects.length
            : state.xpos + 100;

        return {
          ...state,
          currentIndex: newIndex,
          xpos: xPosVal,
          rightButtonClasses: "right-button slider-button",
          leftButtonClasses:
            newIndex === 0
              ? "left-button slider-button disabled"
              : "left-button slider-button",
        };
      }
      case "hideButtons": {
        return {
          ...state,
          rightButtonClasses: "right-button slider-button hide",
          leftButtonClasses: "left-button slider-button hide",
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    xpos: 0,
    leftButtonClasses: "left-button slider-button",
    rightButtonClasses: "right-button slider-button",
  });

  useEffect(() => {
    if (sliderObjects.length <= 1) {
      dispatch({ actionType: "hideButtons" });
    }
  }, []);

  return (
    <div id={id} className={containerClass}>
      <div
        ref={leftButton}
        className={state.leftButtonClasses}
        onClick={() => {
          if (state.currentIndex > 0) {
            dispatch({ actionType: "decrement" });
          }
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div
        ref={rightButton}
        className={state.rightButtonClasses}
        onClick={() => {
          if (state.currentIndex < sliderObjects.length - 1) {
            dispatch({ actionType: "increment" });
          }
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div
        className={panelClass}
        style={{
          width: `${sliderObjects.length * 100}%`,
          transform: `translateX(${state.xpos}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
