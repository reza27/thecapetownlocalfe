import { gql } from "@apollo/client";
import client from "../../helpers/apollo-client";
import React from "react";
import Contact from "./contact-page";

export async function getContactData() {
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
              shortTitle
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

export default async function ContactPageData() {
  // Fetch data directly in a Server Component
  const data = await getContactData();
  // Forward fetched data to your Client Component
  return <Contact data={data} />;
}
