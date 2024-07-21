"use-client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import React, { useState, useEffect, Fragment } from 'react';

export default function ImageSlider(props) {
  const { images, id } = props;
  let currIndex = 0;
  const sliderStyle = {

    width: images.length * 100 + '%'
  };

  const setButtonStates = () => {
    $('#'+id).find('.left-button').removeClass('disabled');
    $('#'+id).find('.right-button').removeClass('disabled');
    if (currIndex === 0) {
      $('#'+id).find('.left-button').addClass('disabled')
    }
    else if (currIndex === images.length-1) {
      $('#'+id).find('.right-button').addClass('disabled')
    }

  }

  useEffect(() => {
    setButtonStates();

    if (images.length <= 1) {
      $('#'+id).find('.left-button').hide();
      $('#'+id).find('.right-button').hide();
    }
  },[])


  const onLeftClick = () => {
    if (currIndex > 0) {
      currIndex --;
    }
    let xpos =  -(100*currIndex);
    setButtonStates();
    $('#'+id).find('.panel-images-slider').css('transform', 'translateX('+ xpos +'%)');
  };

  const onRightClick = () => {
    if (currIndex < images.length-1) {
      currIndex ++;
    }
    let xpos = -(100*currIndex);
    setButtonStates();
    $('#'+id).find('.panel-images-slider').css('transform', 'translateX('+ xpos +'%)');
  };

  return (
  <div id={id} className="image-slider" >
    <div className="left-button slider-button" onClick={() => onLeftClick()}><FontAwesomeIcon icon={faArrowLeft} /></div>
    <div className="right-button slider-button" onClick={() => onRightClick()}><FontAwesomeIcon icon={faArrowRight} /></div>
    <div className="panel-images-slider" style={sliderStyle}>

    {images.map((image, index) =>(
      <div key={image.id + "-" + index} className="panel-image" style={{backgroundImage:'url(' + image?.image?.publicUrl+')', backgroundPosition:'center'}}></div>
    ))}
    </div>
  </div>
  )
}
