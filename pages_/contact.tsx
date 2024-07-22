import ContactForm from "../components/contact-form";
import React, { useState, useEffect } from "react";
import $ from "jquery";
import { gql } from "@apollo/client";
import client from "../helpers/apollo-client";
import Head from "next/head";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact({ data }: { data }) {
  const getFormOptions = (activity) => {
    let ItemsArr = [];
    let activityItemHeadings = activity?.activityItemHeading;
    for (var i = 0; i < activityItemHeadings?.length; i++) {
      for (var j = 0; j < activityItemHeadings[i]?.activityItems.length; j++) {
        ItemsArr.push(activityItemHeadings[i]?.activityItems[j]);
      }
    }
    return ItemsArr;
  };

  useEffect(() => {
    $("#navbar").addClass("scrolled");
  }, []);

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

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query GetActivities {
        activities {
          id
          title
          activityItemHeading {
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
  return {
    props: {
      data: data,
    },
  };
}
