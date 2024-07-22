import Home from "./home-page";
import { gql } from "@apollo/client";
import client from "../helpers/apollo-client";

async function getHomeData() {
  const { data } = await client.query({
    query: gql`
      query GetHome {
        home {
          homeTours {
            homeTour {
              id
              title
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
      }
    `,
    fetchPolicy: "no-cache",
  });
  console.log("data about>>>", data);
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
  return <Home data={data} />;
}
