"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { useSliderContext } from "../lib/contexts/slider-context";

export default function SliderV2({ children }) {
  const sliderObjects = useSliderContext();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const leftButton = useRef<HTMLDivElement | null>(null);
  const rightButton = useRef<HTMLDivElement | null>(null);

  // interface State {
  //   currentIndex: number;
  //   xpos: number;
  //   leftButtonClasses: string;
  //   rightButtonClasses: string;
  // }

  // interface Action {
  //   actionType: "increment" | "decrement" | "hideButtons";
  // }

  // const reducer = (state: State, action: Action) => {
  //   const { actionType } = action;

  //   switch (actionType) {
  //     case "increment": {
  //       const newIndex = state.currentIndex + 1;
  //       const xPosVal = state.xpos - 100;

  //       return {
  //         ...state,
  //         currentIndex: newIndex,
  //         xpos: xPosVal,
  //         rightButtonClasses:
  //           newIndex === sliderObjects.length - 1
  //             ? "right-button slider-button disabled rounded-3xl"
  //             : "right-button slider-button",
  //         leftButtonClasses: "left-button slider-button rounded-3xl",
  //       };
  //     }
  //     case "decrement": {
  //       const newIndex = state.currentIndex - 1;
  //       const xPosVal = state.xpos + 100;

  //       return {
  //         ...state,
  //         currentIndex: newIndex,
  //         xpos: xPosVal,
  //         rightButtonClasses: "right-button slider-button",
  //         leftButtonClasses:
  //           newIndex === 0
  //             ? "left-button slider-button disabled"
  //             : "left-button slider-button",
  //       };
  //     }
  //     case "hideButtons": {
  //       return {
  //         ...state,
  //         rightButtonClasses: "right-button slider-button hide",
  //         leftButtonClasses: "left-button slider-button hide",
  //       };
  //     }
  //     default:
  //       return state;
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, {
  //   currentIndex: 0,
  //   xpos: 0,
  //   leftButtonClasses: "left-button slider-button",
  //   rightButtonClasses: "right-button slider-button",
  // });

  useEffect(() => {
    if (sliderObjects.length <= 1) {
      // dispatch({ actionType: "hideButtons" });
    }
  }, []);

  return (
    <div className="relative">
      <div
        ref={leftButton}
        className="absolute inset-y-0 left-2 m-auto z-10 w-10 h-10 flex justify-center items-center cursor-pointer transition-all duration-1000"
        onClick={() => {
          if (currentIndex > 0) {
            // dispatch({ actionType: "decrement" });
            setCurrentIndex(currentIndex - 1);
          }
        }}
      >
        <div className="bg-white opacity-30 rounded-full w-full h-full absolute active:opacity-45"></div>
        <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
      </div>
      <div
        ref={rightButton}
        className="absolute inset-y-0 right-2 m-auto z-10 w-10 h-10 flex justify-center items-center cursor-pointer transition-all duration-1000"
        onClick={() => {
          if (currentIndex < sliderObjects.length - 1) {
            // dispatch({ actionType: "increment" });
            setCurrentIndex(currentIndex + 1);
          }
        }}
      >
        <div className="bg-white opacity-30 rounded-full w-full h-full absolute active:opacity-45"></div>
        <FontAwesomeIcon icon={faChevronRight} className="text-white" />
      </div>

      <div className="flex">
        <div
          className="flex duration-500 transition-all"
          style={{
            width: `${sliderObjects.length * 100}%`,
            transform: `translateX(${-currentIndex * 100}%)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
