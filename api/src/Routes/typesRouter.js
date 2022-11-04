const { Router } = require('express');
const router = Router();

const PokemonService = require('../Service/pokemonService.js');
const service = new PokemonService();


router.get('/', async (req, res)=>{
    const types = await service.getTypes();
    types.splice(18, 1)
    res.json(types)
})







module.exports = router;