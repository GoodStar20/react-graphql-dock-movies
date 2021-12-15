const GraphQL = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } =
  GraphQL;

const MoviesType = new GraphQLObjectType({
  name: "Movies",
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    poster_path: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const MovieInfoType = new GraphQLObjectType({
  name: "MovieInfo",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    overview: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    poster_path: {
      type: GraphQLString,
    },
    genres: {
      type: GraphQLString,
    },
    release_date: {
      type: GraphQLString,
    },
    vote_average: {
      type: GraphQLString,
    },
    production_companies: {
      type: GraphQLString,
    },
    vote_average: {
      type: GraphQLString,
    },
    runtime: {
      type: GraphQLString,
    },
  }),
});

module.exports = { MoviesType, MovieInfoType };
