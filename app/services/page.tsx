import { gql } from "@apollo/client";
import client from "../../helpers/apollo-client";
import React from "react";
import Services from "./services-page";

export async function getServicesData() {
  const { data } = await client.query({
    query: gql`
      query GetServices {
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
              anchor
            }
          }
        }

        services {
          title
          serviceItems {
            id
            title
            content {
              document
            }
            price
            images {
              image {
                publicUrl
                id
              }
              altText
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

export default async function ServicesPageData() {
  // Fetch data directly in a Server Component
  const data = await getServicesData();
  // Forward fetched data to your Client Component
  return <Services data={data} />;
}
