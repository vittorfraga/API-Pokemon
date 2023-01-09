const express = require("express");
const { pokemons, pokemonDetails } = require("./controllers/pokemons");

const routes = express();

routes.get("/pokemon", pokemons);
routes.get("/pokemon/:idOuNome", pokemonDetails);

module.exports = routes;
