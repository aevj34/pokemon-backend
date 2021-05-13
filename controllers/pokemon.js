const { response } = require('express');
const pokedex = require('../data/pokedex.json')

const getPokemons = async(req = request, res = response) => {

    const pageSize = req.query.pageSize || 10;
    const skip = req.query.skip || 0;

    let pokemons = [];
    let counter = 0;
    let counter2 = 0;
    pokedex.forEach(pokemon => {
        if (counter >= skip && counter2 < pageSize){
            pokemons.push(pokemon);
            counter2++;
            console.log(counter);
        }
        counter++;
    });
  
    const total = counter;
    const totalPages = Math.ceil(total / pageSize);

    res.json({
        pokemons,
        total,
        totalPages
    });
}


const searchPokemons = async(req = request, res = response) => {

    let search = req.params.search;

    let pokemons = [];
    let counter = 0;
    pokedex.forEach(pokemon => {
        if (pokemon.name.english.toUpperCase().includes(search.toUpperCase())){
            pokemons.push(pokemon);
            counter++;
        }
           
    });
  
    const total = counter;
    const totalPages = 1;

    res.json({
        pokemons,
        total,
        totalPages
    });
}


const getPokemon = async(req = request, res = response) => {

    const id = req.params.id;
    let currentPokemon;

    pokedex.forEach(pokemon => {
        if (id == pokemon.id)
            currentPokemon = pokemon
    });
  

    res.json({
        pokemon: currentPokemon,
    });
}



module.exports = {
    getPokemons,
    getPokemon,
    searchPokemons
};