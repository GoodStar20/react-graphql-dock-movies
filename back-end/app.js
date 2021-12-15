const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");

const GraphQLSchema = require("./graphql");

dotenv.config();
/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);

app.use(logger("dev"));

app.use(
  bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 5000 })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

/**
 * GraphQL server
 */

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlHTTP({
    schema: GraphQLSchema,
    graphiql: true,
  })
);

/**
 * Start Express server.
 */
app.listen(4000, function () {
  console.log("Express server listening");
});

module.exports = app;
