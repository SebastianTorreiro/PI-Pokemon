const { Router } = require('express');
const router = Router();

const PokemonService = require('../service/pokemonService.js');
const service = new PokemonService();



router.get('/', async (req, res)=>{
    const pokemons = await service.getAll();
     res.json(pokemons)
    });
    
module.exports = router;