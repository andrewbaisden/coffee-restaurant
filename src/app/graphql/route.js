import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { menu } from '../../../data/menu';
import { profile } from '../../../data/profile';

// Define the GraphQL schema and resolvers
const typeDefs = gql`
  type Menu {
    id: String
    foodType: String
    name: String
    description: String
    img: String
    nutrition: [Nutrition]
  }

  type Nutrition {
    energy: String
    fat: String
    saturatedFat: String
    carbohydrates: String
    sugar: String
    fibre: String
    protien: String
    salt: String
  }

  type Profile {
    id: String
    name: String
    location: String
    bio: String
    img: String
  }

  type Query {
    menu: [Menu]
    profile: [Profile]
  }
`;

const resolvers = {
  Query: {
    menu: () => menu,
    profile: () => profile,
  },
};

// Create the Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export async function GET(request) {
  return handler(request);
}

export async function POST(request) {
  return handler(request);
}
