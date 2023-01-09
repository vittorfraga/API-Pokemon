const utils = require("utils-playground");

const pokemons = async (req, res) => {
  try {
    const { pagina } = req.query;

    const pokemonsList = await utils.listarPokemons(pagina ?? 1);

    return res.json(pokemonsList);
  } catch (error) {
    res.send({ error: "An error occurred while trying to list the pokemons" });
  }
};

const pokemonDetails = async (req, res) => {
  try {
    const { idOuNome } = req.params;

    const pokemon = await utils.detalharPokemon(idOuNome);

    const {
      id,
      name,
      height,
      weight,
      base_experience,
      forms,
      abilities,
      species,
    } = pokemon;

    return res.json({
      id,
      name,
      height,
      weight,
      base_experience,
      forms,
      abilities,
      species,
    });
  } catch (error) {
    res.send({
      error: "An error occurred while trying to get the pokemon information",
    });
  }
};

module.exports = { pokemons, pokemonDetails };
