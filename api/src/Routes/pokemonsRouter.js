const { Router } = require('express');
const router = Router();

const PokemonService = require('../service/pokemonService.js');
const service = new PokemonService();

router.get('/all', async (req, res)=>{
    const pokemons = await service.getAll();
     res.json(pokemons)
});

router.get('/', async (req, res)=>{
    let {name} = req.query;
    const pokemon = await service.getByName(name);
    res.json(pokemon);
});


router.get('/:id', async (req, res)=>{
    const {id} = req.params
    const pokemon = await service.getById(id)
    res.json(pokemon);
});




router.post('/', async (req, res)=>{
    const body = req.body
    const createPokemon = await service.create(body);
    res.json(createPokemon);
    
});




module.exports = router;