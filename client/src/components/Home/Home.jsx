import React from 'react'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Pokemons from '../Pokemons/Pokemons'
import "./home.css"

function Home() {
  return (
    <div className='home-conteiner'>
        <Header />
        <SearchBar />
        <Pokemons />
        
    </div>
  );
}
export default Home