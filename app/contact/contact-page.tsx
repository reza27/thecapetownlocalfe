"use client";
import ContactForm from "../../components/contact-form";
import React, { useState, useEffect } from "react";
import Head from "next/head";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact(aData) {
  const data = aData.data.props.data;

  const getFormOptions = (activity) => {
    let ItemsArr: any[] = [];
    let activityItemHeadings = activity?.activityItemHeading;
    for (var i = 0; i < activityItemHeadings?.length; i++) {
      for (var j = 0; j < activityItemHeadings[i]?.activityItems.length; j++) {
        ItemsArr.push(activityItemHeadings[i]?.activityItems[j]);
      }
    }
    return ItemsArr;
  };

  return (
    <>
      <Head>
        <title>Contact - The Cape Town Local</title>
      </Head>
      <div id="contact">
        <div>
          <ContactForm selectOptions={getFormOptions(data.activities[0])} />
        </div>
      </div>
    </>
  );
}
