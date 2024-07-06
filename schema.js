export const typeDefs = `#graphql
   type Game {
     id: ID!
    title: String!
    platform: [String!]!

   }
  type Review{
    id: ID!
    rating: Int!
    content: String!

  } 
  type author{
     id: ID!
    name: String!
    verified: Boolean!

  }
  type Query {
    games: [Game]
    reviews: [Review]
    authors: [author]
  }

`;
