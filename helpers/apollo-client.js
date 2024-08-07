import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri:
    process.env.APP_ENV === "production"
      ? `${process.env.PROD_URL}/api/graphql`
      : `${process.env.LOCAL_URL}/api/graphql`,
});

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError)
    console.error(`[Network error]: ${JSON.stringify(networkError, null, 2)})`);
});

console.log("process.env.PROD_URL apollo", process.env.PROD_URL);
const client = new ApolloClient({
  uri:
    process.env.APP_ENV === "production"
      ? `${process.env.PROD_URL}/api/graphql`
      : `${process.env.LOCAL_URL}/api/graphql`,
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
  link: from([errorLink, httpLink]), // `httpLink` must be the last

  cache: new InMemoryCache(),
});

export default client;
