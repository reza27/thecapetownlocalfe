import { gql } from "@apollo/client";
import client from "../../helpers/apollo-client";
import React from "react";
import About from "./about-page";
export async function getAboutPage() {
  const { data } = await client.query({
    query: gql`
      query GetAbout {
        about {
          title
          content {
            document
          }
          guidesInfo {
            document
          }
          guides(orderBy: { displayIndex: asc }) {
            id
            name
            title
            image {
              publicUrl
            }
            altText
            description
            displayIndex
          }
          affiliations {
            image {
              publicUrl
            }
            altText
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
  const data = await getAboutPage();
  // Forward fetched data to your Client Component
  return <About data={data} />;
}
