import ContactForm from '../components/contact-form';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { gql } from "@apollo/client";
import client from "../helpers/apollo-client";
import Image from 'next/image';
import ImageLoader from '../components/image-loader';

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact'
}

const waImageStyle = {
  objectFit: 'contain',
  objectPosition: 'center bottom',
  height: '60px',
  width: '60px',
  overflow: 'hidden'
};


export default function Contact({ data }: {data}) {

  const getFormOptions =  (activity) => {
    let ItemsArr = [];
    let activityItemHeadings = activity?.activityItemHeading;
    for (var i = 0; i < activityItemHeadings?.length; i++) {
      for (var j = 0; j < activityItemHeadings[i]?.activityItems.length; j++) {
        ItemsArr.push(activityItemHeadings[i]?.activityItems[j])
      }
    }
    return ItemsArr;
  };

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
      <div>
        <ContactForm selectOptions={getFormOptions(data.activities[0])}/>
      </div>
      <a id="whatsapp" href="https://wa.me/27789803335" target="_blank">
      <Image
        loader={ImageLoader}
        src="/WhatsApp.svg"
         width={60}
         height={60}
         style={waImageStyle}/>
         <p>Reach out via WhatsApp</p>
      </a>
    </div>)
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
    query GetActivities {
        activities {
          id
          title
          activityItemHeading  {
            id
            title
            activityItemsCount
            activityItems {
              id
              title
            }
          }
        }
      }
    `,
  });
  console.log('data>>>', data)
  return {
    props: {
      data: data,
    },
  };
}
