
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight, faStar} from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import React, { useState, useEffect, Fragment } from 'react';

export default function ReviewSlider(props) {
  const { reviews, id } = props;
  let currIndex = 0;
  console.log('id>>>', id)

  const sliderStyle = {

    width: reviews.length * 100 + '%'
  };

  const setButtonStates = () => {
    $('#'+id).find('.left-button').removeClass('disabled');
    $('#'+id).find('.right-button').removeClass('disabled');
    if (currIndex === 0) {
      $('#'+id).find('.left-button').addClass('disabled')
    }
    else if (currIndex === reviews.length-1) {
      $('#'+id).find('.right-button').addClass('disabled')
    }

  }

  useEffect(() => {
    setButtonStates();

    if (reviews.length <= 1) {
      $('#'+id).find('.left-button').hide();
      $('#'+id).find('.right-button').hide();
    }
  },[])

  let xpos = 0;
  const onLeftClick = () => {
    if (currIndex > 0) {
      currIndex --;
      xpos += (100/reviews.length);

    }
    setButtonStates();
    $('#'+id).find('.panel-review-slider').css('transform', 'translateX('+ xpos +'%)');
  };

  const onRightClick = () => {
    if (currIndex < reviews.length-1) {
      currIndex ++;
      xpos -= (100/reviews.length);
    }
    setButtonStates();
    $('#'+id).find('.panel-review-slider').css('transform', 'translateX('+ xpos +'%)');
  };
  let getStars = (numStars) => {
    console.log('numStars',numStars)
      let stars = [];

      for (let i = 0; i < numStars; i++) {
        stars.push(<div className="star"><FontAwesomeIcon icon={faStar} /></div>)
      }
      return stars;
  }

  return (
  <div id={id} className="review-slider">
    <div className="left-button slider-button" onClick={() => onLeftClick()}><FontAwesomeIcon icon={faArrowLeft} /></div>
    <div className="right-button slider-button" onClick={() => onRightClick()}><FontAwesomeIcon icon={faArrowRight} /></div>
    <div className="panel-review-slider" style={sliderStyle}>

    {reviews.map((review) =>(
      <div key={review.id} className="review">
        <div className="inner-review">
        <h3>{review.name}</h3>
        <div className="stars">{getStars(review.stars)}</div>
        <p>{review.review}</p>
        </div>
      </div>
    ))}
    </div>
  </div>
  )
}
