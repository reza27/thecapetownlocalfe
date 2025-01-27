import { gql } from "@apollo/client";
import React from "react";
import Tours from "./tours-page";
import client from "../../helpers/apollo-client";

export async function getToursData() {
  //(where: {tag:{name:{equals:"Tours"}}})
  const { data } = await client.query({
    query: gql`
      query GetActivities {
        activities {
          id
          title
          faq {
            question
            answer {
              document
            }
          }
          activityItemHeading {
            id
            title
            activityItemsCount
            activityItems {
              id
              title
              shortTitle
              anchor
              tab
              content {
                document
              }
              price
              duration
              images {
                altText
                id
                name
                image {
                  publicUrl
                }
              }
            }
          }
        }
      }
    `,
    fetchPolicy: "no-cache",
  });
  return {
    props: {
      data: data,
    },
  };
}

export default async function ToursPageData() {
  // Fetch data directly in a Server Component
  const data = await getToursData();
  // Forward fetched data to your Client Component
  return <Tours data={data} />;
}
