import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
  ApolloLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri:
    process.env.APP_ENV === "production"
      ? `${process.env.PROD_URL}/api/graphql`
      : `${process.env.LOCAL_URL}/api/graphql`,
  fetch: function (uri, options) {
    return fetch(uri, {
      ...(options ?? {}),
      next: {
        revalidate: 0,
      },
    });
  },
});

console.log("process.env.PROD_URL apollo", process.env.PROD_URL);

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

export default client;
