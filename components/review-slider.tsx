"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IReview } from "../types/IReview";

export default function ReviewSlider(props) {
  const { reviews, id }: { reviews: IReview[]; id: string } = props;
  const leftButton = useRef<HTMLInputElement | null>(null);
  const rightButton = useRef<HTMLInputElement | null>(null);
  const panelReviewSlider = useRef<HTMLInputElement | null>(null);
  const [xpos, setXpos] = useState<number>(0);
  const currIndex = useRef<number>(0);

  const setButtonStates = () => {
    leftButton.current?.classList.remove("disabled");
    rightButton.current?.classList.remove("disabled");

    if (currIndex.current === 0) {
      leftButton.current?.classList.add("disabled");
    } else if (currIndex.current === reviews.length - 1) {
      rightButton.current?.classList.add("disabled");
    }
  };

  useEffect(() => {
    setButtonStates();

    if (reviews.length <= 1) {
      leftButton.current?.classList.add("hide");

      rightButton.current?.classList.add("hide");
    }
  }, []);

  const onLeftClick = () => {
    if (currIndex.current > 0) {
      currIndex.current--;
      let xposVal = xpos;
      setXpos((xposVal += 100 / reviews.length));
    }
    setButtonStates();
  };

  const onRightClick = () => {
    if (currIndex.current < reviews.length - 1) {
      currIndex.current++;
      let xposVal = xpos;
      setXpos((xposVal -= 100 / reviews.length));
    }
    setButtonStates();
  };
  let getStars = (numStars) => {
    let stars = [];

    for (let i = 0; i < numStars; i++) {
      stars.push(
        <div className="star" key={i}>
          <FontAwesomeIcon icon={faStar} />
        </div>
      );
    }
    return stars;
  };

  return (
    <div id={id} className="review-slider">
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
        className="panel-review-slider"
        style={{
          width: reviews.length * 100 + "%",
          transform: `translateX(${xpos}%)`,
        }}
      >
        {reviews.map((review, index) => (
          <div key={review.name} className="review">
            <div className="inner-review">
              <h3>{review.name}</h3>
              <div className="stars">{getStars(review.stars)}</div>
              <p>{review.review}</p>
              <Link className="review-link" href={review.url} target="blank">
                See full Google review <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
