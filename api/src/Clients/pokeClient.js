require('dotenv').config();
const axios = require('axios');
const baseUrl = `https://pokeapi.co/api/v2/$value$?limit=7`

const getAllPokemons = async () => {
    const urlGet = baseUrl.replace("$value$", "pokemon")
    const pokeApiResponse = await getToApiRest(urlGet)
    let pokemones = [];
    let pokemonsInfo = pokeApiResponse.data.results;
    for (let i = 0; i < pokemonsInfo.length; i++) {
        const element =  await getToApiRest(pokemonsInfo[i].url);
        pokemones.push(element.data); 
        console.log(i)
    }
    const final = mapResponsePokemonsFromPokeApi(pokemones);
    return final;
}

const searchPokemonsByName = async (name) => {
    const urlGet = baseUrl.replace("$value$", `pokemon/${name}`)
    const pokeApiResponse = await getToApiRest(urlGet)
    const poke = [];
    poke.push(pokeApiResponse.data)
    return mapResponsePokemonFromPokeApi(poke)
} 

const searchPokemonsById = async (id) => {
    const urlGet = baseUrl.replace("$value$", `pokemon/${id}`)
    const pokeApiResponse = await getToApiRest(urlGet)
    const poke = [];
    poke.push(pokeApiResponse.data)
    return mapResponsePokemonFromPokeApi(poke)
}

const getAllTypes = async () => {
    const urlGet = baseUrl.replace("$value$", `type`)
    const pokeApiResponse = await getToApiRest(urlGet)
    return typesResponse = mapTypeInfo(pokeApiResponse.data.results);
}

const mapResponsePokemonFromPokeApi = (pokemons) =>{
    return pokemons.map(pokemon =>{
        const {
            id,
            name,
            types,
            stats,
            weight,
            height,
            sprites,
        } = pokemon
        return {
            id,
            name,
            types: mapTypesInfo(types),
            weight,
            height,
            img: sprites.front_default,
            speed: stats[5].base_stat,
            hp: stats[0].base_stat,
            defense: stats[2].base_stat

        }
    })
}

const mapResponsePokemonsFromPokeApi = (pokemons) =>{
    return pokemons.map(pokemon =>{
        const {
            name,
            types,
            sprites,
            id
        } = pokemon
        return {
            name,
            types: mapTypesInfo(types),          
            img: sprites.front_default,
            id
        }
    })
}

const mapTypesInfo = (types) =>{
    return types.map( t =>  t.type.name)
}

const getToApiRest = async(url) =>{
    return await axios.get(url)
}

const mapTypeInfo = (types) =>{ 
    return types.map( t =>  t.name)
}



module.exports = {
    getAllPokemons,
    searchPokemonsByName,
    searchPokemonsById,
    getAllTypes
}
