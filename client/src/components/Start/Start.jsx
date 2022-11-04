import React from 'react'
import { Link } from 'react-router-dom'
import "./start.css"
export default function Start() {
  return (
    <div className='container'>
        <Link to="/pokemons">
            <button className='start-button'> Start Game </button>
        </Link>
    </div>
  )
}
