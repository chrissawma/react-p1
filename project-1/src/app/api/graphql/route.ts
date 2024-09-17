import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

// Define your schema using GraphQL Schema Definition Language (SDL)
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define the resolvers that specify how the API resolves each field
const resolvers = {
  Query: {
    hello: () => 'Hello from Apollo!',
  },
};

// Create a new instance of ApolloServer
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// Export the API route handlers for GET and POST requests
export const GET = startServerAndCreateNextHandler(apolloServer);
export const POST = startServerAndCreateNextHandler(apolloServer);
