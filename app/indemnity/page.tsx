import { gql } from "@apollo/client";
import client from "../../helpers/apollo-client";
import React from "react";
import Indemnity from "./indemnity-page";
export async function getIndemnityPage() {
  const { data } = await client.query({
    query: gql`
      query GetIndemnity {
        indemnityFormText {
          content {
            document
          }
        }
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
    fetchPolicy: "no-cache",
  });
  return {
    props: {
      data: data,
    },
  };
}

export default async function IndemnityPageData() {
  // Fetch data directly in a Server Component
  const data = await getIndemnityPage();
  // Forward fetched data to your Client Component
  return <Indemnity data={data} />;
}
