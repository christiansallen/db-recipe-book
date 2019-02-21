const express = require("express");
const helmet = require("helmet");

const dishes = require("./routes/dishes.js");
const recipes = require("./routes/recipes.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/dishes", dishes);
server.use("/api/recipes", recipes);

const port = 5000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
