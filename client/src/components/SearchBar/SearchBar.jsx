import React, { useState } from 'react'
import "./searchbar.css"
import { orderBy, filterBy, getPokemon, getAllPokemons } from "../../actions/"
import {connect} from 'react-redux'

function SearchBar({orderBy,  , filterBy, getPokemon, getAllPokemons}) {

const [input, setInput] = useState('')


const deleteFilters = () =>{
    getAllPokemons()
}

const handleInputSearch = (e) =>{
    setInput(e.target.value)
    console.log(input);
}

const submitSearch = () =>{
    getPokemon(input)
    setInput('')
}

const handleSelect = (e) => {
    filterBy(e.target.value)
}

const handleSelect2 = (e) => {
    orderBy(e.target.value)
}
  return (    
  <>
    <div className='search-bar'>
      <div className='input-search'>

        <button className='button-filter' onClick={deleteFilters}>Quitar filtros</button>

        <label htmlFor="search">Search</label>
        <input
        type="text" 
        placeholder='Search...' 
        value={input} 
        onChange={handleInputSearch} 
        ></input>

        <button onClick={submitSearch}>Buscar</button>
      </div>
      <div className='container-div'    >
            <select  className="selectCont"  name="" id="" onChange={handleSelect} >

                    <option className="option" value="default">TODOS...</option>

                <optgroup className="optionGroup" label="DataBase">
                    <option className="option" value="DB">CREADOS</option>
                </optgroup>

                <optgroup className="optionGroup" label="API">
                    <option className="option" value="API">API</option>
                </optgroup>  

                <optgroup className="optionGroup" label="Types">
                    { types && types.map(t => <option key={t} value={t}>{t}</option>) }
                </optgroup>  

            </select>
            <select  className="selectCont"  name="" id="" onChange={handleSelect2}>

                    <option className="option" value="default">ORDEN...</option>

                <optgroup className="optionGroup" label="Strength">
                    <option className="option" value="asc">Mayor a Menor</option>
                    <option className="option" value="desc">Menor a Mayor</option>
                </optgroup>  

                <optgroup className="optionGroup" label="Alphabetic">
                    <option className="option" value="A-Z">A - Z</option>
                    <option className="option" value="Z-A">Z - A</option>
                </optgroup>     

            </select>
        </div>
    </div>
  </> 
  )
}

const mapStateToProps = (state) => {
    return {
        types: state.types
    }
}

export default connect (mapStateToProps, { filterBy, orderBy, getPokemon, getAllPokemons})(SearchBar);