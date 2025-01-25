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
      <div className="px-4 md:px-16">
        <div className="mt-32 mb-12">
          <h1 className="text-center py-9">
            Ready to <span className="text-yellow">make a booking</span> with
            us?
          </h1>
          <ContactForm
            selectOptions={getFormOptions(data.props.data.activities[0])}
          />
        </div>
      </div>
    </>
  );
}
