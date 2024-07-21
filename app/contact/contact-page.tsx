"use client"
import ContactForm from '../../components/contact-form';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Head from 'next/head'


import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact'
}

export default function Contact(aData) {
    const data = aData.data.props.data;

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
        <>
            <Head>
                <title>Contact - The Cape Town Local</title>
            </Head>
            <div id="contact">
                <div>
                    <ContactForm selectOptions={getFormOptions(data.activities[0])}/>
                </div>

            </div>
        </>)

}