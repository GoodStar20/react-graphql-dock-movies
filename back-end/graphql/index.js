const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLSchema } = GraphQL;

const MovieQuery = require("./queries/Movies");

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    movies: MovieQuery.movies(),
    movieInfo: MovieQuery.movieInfo(),
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
