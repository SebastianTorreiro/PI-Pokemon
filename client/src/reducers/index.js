import {
    GET_ALL_POKEMONS,
    SEARCH_BY_NAME,
    GET_POKEMON_DETAIL,
    GET_TYPES,
    ORDER_BY,
    FILTER_BY,
  } from "../actions/constantes.js";

const initialState = {
    allPokemons: [],
    pokemonDetail: {},
    types: [],
    filtered: [],
    pokemonsReference: []
}

export default function rootReducer( state = initialState, action) {
    switch(action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                pokemonsReference: action.payload,
                filtered: action.payload,
            }
        case GET_POKEMON_DETAIL:
            console.log(action.payload);
            return {
                ...state,
                pokemonDetail: action.payload[0],
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case SEARCH_BY_NAME:
            return {
                ...state,
                filtered: action.payload
            }
        case FILTER_BY:
        //    if(action.payload === 'default'){
        //         return {...state, filtered: state.pokemonsReference}
        //    }
           if(action.payload === 'DB'){
                return {...state, filtered: state.pokemonsReference.filter((poke) => (typeof poke.id) === 'string')}
            }
            if(action.payload === 'API'){
                return {...state, filtered: state.pokemonsReference.filter((poke) => (typeof poke.id) === 'number')}
            }
            else{
                return {...state, filtered: state.pokemonsReference.filter((poke) => {
                    return poke.types.find((type) => {
                        return type === action.payload
                    })
                })}
            }
        case ORDER_BY:
            // if(action.payload === 'default'){
            //     return {...state, filtered: state.allPokemons
            //     }}
            if(action.payload === 'A-Z'){
                return {...state, filtered: [...state.filtered].sort((prev, next) => {
                    if(prev.name > next.name) return 1
                    if(prev.name < next.name) return -1
                    return 0
                })}}
            if(action.payload === 'Z-A'){
                return {...state, filtered: [...state.filtered].sort((prev, next) => {
                    if(prev.name > next.name) return -1
                    if(prev.name < next.name) return 1
                    return 0
                })}}
        default:
            return state;
    }
}