const { Router } = require('express');

const {
    getPokemons,
    getPokemon,
    searchPokemons

} = require('../controllers/pokemon');

const router = Router();

router.get('/', [
], getPokemons);

router.get('/search/:search', [
], searchPokemons);

router.get('/:id', [
], getPokemon);

module.exports = router;