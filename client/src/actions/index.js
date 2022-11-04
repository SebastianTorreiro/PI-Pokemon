import axios from "axios";
import {
    GET_ALL_POKEMONS,
    SEARCH_BY_NAME,
    GET_POKEMON_DETAIL,
    GET_TYPES,
    ORDER_BY,
    FILTER_BY,
  } from  "./constantes.js";


  const data = [{
    "name": "bulbasaur",
    "types": [
        "grass",
        "poison"
    ],
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "id": 1
},
{
    "name": "ivysaur",
    "types": [
        "grass",
        "poison"
    ],
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "id": 2
}]
// export function getAllPokemons(){
//     return function (dispatch) {
//         dispatch({type: GET_ALL_POKEMONS, payload: data})        
//     }
// }   
export function getAllPokemons(){
    return function (dispatch) {
        return axios
        .get("http://localhost:3001/pokemons/all")            
        .then((res) => {
            dispatch({type: GET_ALL_POKEMONS, payload: res.data});
        })
        .catch((error) =>{
         console.log(error)
            return error;
        })
    };
}

export function getPokemonDetail(id){
    return function(dispatch){
        return axios
        .get(`http://localhost:3001/pokemons/${id}`)
        .then((res) => {
            console.log(res.data);
            dispatch({type: GET_POKEMON_DETAIL, payload: res.data})
        })
        .catch((err) => {
            return err
        })
    }
}

export function getPokemon(name){
    return function(dispatch){
        axios
        .get(`http://localhost:3001/pokemons?name=${name}`)
        .then((res) => dispatch ({type:SEARCH_BY_NAME, payload: res.data}))
        .catch((err) => {
            return err
        })
    }
}
export function getPokemonTypes(){
    return function(dispatch){
        return axios 
        .get('http://localhost:3001/types')
        .then((res) => {
            dispatch({type: GET_TYPES, payload: res.data})
        })
        .catch((err) => {
            return err
        })
    }
}

export function orderBy(order){
    return function(dispatch) {
        dispatch({type: ORDER_BY, payload:order})
    }
}

export function filterBy(order){
    return function(dispatch) {
        dispatch({type: FILTER_BY, payload:order})
    }
}
