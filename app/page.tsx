import Home from "./home-page";
import { gql } from "@apollo/client";
import client from "../helpers/apollo-client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | The Cape Town Local",
};

async function getHomeData() {
  const { data } = await client.query({
    query: gql`
      query GetHome {
        home {
          faq {
            id
            question
            answer {
              document
            }
          }
          homeTours {
            homeTour {
              id
              title
              shortTitle
              anchor
              tab
              images(take: 1) {
                altText
                image {
                  id
                  publicUrl
                }
              }
            }
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
              shortTitle
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

export default async function HomePageData() {
  // Fetch data directly in a Server Component
  const data = await getHomeData();
  // Forward fetched data to your Client Component
  return <Home homeData={data} />;
}
