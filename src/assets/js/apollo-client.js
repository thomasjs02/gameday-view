// apollo-client.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  // uri: 'http://localhost:4000/graphql',
  uri: 'https://gamedaylgx-15f0168cce7e.herokuapp.com/graphql',
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
