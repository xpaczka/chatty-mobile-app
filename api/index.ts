import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { API_URI, API_TOKEN } from '@env';

const httpLink = createHttpLink({
  uri: API_URI,
  headers: { Authorization: `Bearer ${API_TOKEN}` },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
