const GraphQL = require("graphql");
const axios = require("axios");

const { GraphQLList, GraphQLString } = GraphQL;

const Movies = require("../types/Movies");

module.exports = {
  movies() {
    return {
      type: new GraphQLList(Movies.MoviesType),
      args: { key: { type: GraphQLString } },
      resolve(parentValue, args) {
        let URI = `${process.env.API_URL}movie/popular?api_key=${process.env.API_KEY}&language=en-US`;

        if (args.key !== "") {
          URI = `${process.env.API_URL}search/movie?api_key=${process.env.API_KEY}&query=${args.key}&language=en-US`;
        }
        return axios.get(URI).then((res) => res.data.results);
      },
    };
  },

  movieInfo() {
    return {
      type: Movies.MovieInfoType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        const URI = `${process.env.API_URL}movie/${args.id}?api_key=${process.env.API_KEY}&language=en-US`;
        return axios.get(URI).then((res) => {
          const movie = res.data;
          movie.genres = movie.genres.map((g) => g.name).join(", ");
          movie.poster_path = `${process.env.IMAGE_URL}${movie.poster_path}`;
          movie.production_companies = movie.production_companies
            .map((g) => g.name)
            .join(", ");
          movie.runtime += " min.";
          return movie;
        });
      },
    };
  },
};
