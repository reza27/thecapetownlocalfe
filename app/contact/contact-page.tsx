"use client";
import ContactForm from "../../components/contact-form";
import React from "react";
import Head from "next/head";

import { Metadata } from "next";
import { getFormOptions } from "../../components/forms/getFormOptions";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact({ data }) {
  return (
    <>
      <Head>
        <title>Contact - The Cape Town Local</title>
      </Head>
      <div id="contact">
        <div>
          <ContactForm
            selectOptions={getFormOptions(data.props.data.activities[0])}
          />
        </div>
      </div>
    </>
  );
}
