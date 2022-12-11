
import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log('process.env.PROD_URL apollo',process.env.PROD_URL)
const client = new ApolloClient({
  //uri: process.env.NODE_ENV==='production'? `${process.env.PROD_URL}/api/graphql`: `${process.env.LOCAL_URL}/api/graphql`,
  uri: `${process.env.PROD_URL}/api/graphql`,
  //uri: 'http://localhost:3000/api/graphql',
  //uri: 'https://thecapetownlocal.herokuapp.com/api/graphql',
  cache: new InMemoryCache(),
});

export default client;
