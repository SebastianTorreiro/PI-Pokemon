import {useEffect} from 'react'
import { connect } from 'react-redux';
import Pokemon from '../Pokemon/Pokemon';
import {getAllPokemons, getPokemonTypes} from "../../actions/"
import "./pokemons.css"

function Pokemons({allPokemons, getAllPokemons,getPokemonTypes }) {


  useEffect(() =>{
    getAllPokemons();
    getPokemonTypes();
  },[])



  return (
    <div className='cards-conteiner'>
     {allPokemons.length ? (
       allPokemons.map((p, index) => {
         return <Pokemon
                  key={index}
                  name={p.name}
                  types={p.types}
                  image={p.img}
                  id={p.id}
         />
       })): <div>
              <p>LOADING..</p>
            </div>}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    allPokemons: state.filtered
  }
}

export default connect(mapStateToProps,{ getAllPokemons, getPokemonTypes})(Pokemons)
