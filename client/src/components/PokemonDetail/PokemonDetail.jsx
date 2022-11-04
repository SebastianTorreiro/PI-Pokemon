import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getPokemonDetail} from "../../actions/index.js"
import { Link } from 'react-router-dom'
import Loading from '../loading/Loading.jsx'

 function PokemonDetail({pokemonDetail, getPokemonDetail}) {

    console.log(pokemonDetail);
    const {id} = useParams()


    // let pokemonDetails = pokemonDetail[0]

    console.log(id)
    useEffect(() => {
        getPokemonDetail(id);
        },[])

  return (<div>
        {pokemonDetail.name ? <div><p>{pokemonDetail.name}</p></div> : <div>err</div> }   
        {pokemonDetail.id ? <div><p>{pokemonDetail.id}</p></div> : <div>err</div>} 
        {pokemonDetail.img ? <div><img src={pokemonDetail.img} alt="" /></div> : <div>err</div> }   

    <Link to="/pokemons">
        <button>
            Volver
        </button>
    </Link>
    {/* <Loading/> */}
    
  </div>

  )
}



const mapStateToProps = (state)=>{
    return {
        pokemonDetail: state.pokemonDetail
    } 
}



export default connect(mapStateToProps, {getPokemonDetail}) (PokemonDetail)