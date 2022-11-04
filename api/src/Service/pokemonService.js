const { Pokemon, Type } = require('../db.js');
const {getAllPokemons, searchPokemonsById, searchPokemonsByName, getAllTypes  } = require('../Clients/pokeClient');
const boom = require('boom')
class PokemonService{


async create(data){
    try {
        const pokemonCreated = await Pokemon.create({
            name: data.name,
            hp: data.hp,
            defense: data.defense,
            speed: data.speed,
            height: data.height,
            weight: data.weight,
        })  
        if(data.types.length > 0 && data.types.length < 2 ){
            pokemonCreated.addType(data.types[0])
        }else{
            pokemonCreated.addType(data.types[0])
            pokemonCreated.addType(data.types[1])
        }
        return pokemonCreated
    } catch (error) {
        console.log(error);
    }
}

async getAll(){
    try {
    const prueba = []
    if(prueba){
        console.log('era true');
    }
   return await getAllPokemons();
    } catch (error) {
        console.log(error);
    }
}

async getById(id){
    console.log(typeof(id));
    if (id.length > 3) {
        try {
            const db = await Pokemon.findOne({
                where: {id : id },
                include: Type});
            console.log(db)
            return db.dataValues; 
        } catch (error) {
            throw boom.notFound('Pokemon not found')
        }
    }
    if(id.length < 4 && id.length > 0){
        try {
            const response = await searchPokemonsById(id);
            return response 
        } catch (error) {
            throw boom.notFound('Pokemon not found')
        }
    }
   throw boom.notFound('Pokemon not found')
}

async getByName(name){
        try {
            let db = await Pokemon.findAll({
                where: {name : name },
                include: Type});
                // console.log(db.length)
                if(db.length > 0){
                    return db
                } 
            const apiRes = await searchPokemonsByName(name);
            if(apiRes){
             return apiRes
            }
        } catch (error) {
            throw boom.notFound('Pokemon not found')
        }
}

async getTypes(){
    return await getAllTypes();
}

}

module.exports = PokemonService