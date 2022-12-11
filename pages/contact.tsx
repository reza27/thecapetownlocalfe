import ContactForm from '../components/contact-form';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';

export default function Contact() {

  useEffect(() => {
    // const handleScroll = event => {
    //   //console.log('window.scrollY', window.scrollY);
    //   if (window.scrollY > 0) {
        $('#navbar').addClass('scrolled')
    //   }
    //   else {
    //     $('#navbar').removeClass('scrolled')
    //   }
    // };
    //
    // window.addEventListener('scroll', handleScroll);
    //
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  },[])

  return (
    <div id="contact">
      <ContactForm/>
    </div>)
}
