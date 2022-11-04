import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import logo from "../../imgs/loginardo.jpg"


export default function Header() {
  return (
    <div className='container'>
        <Link to="/pokemons">
            <img className='logo' src={logo} alt='logo'/>
        </Link>
        <Link to="/about">
           About
        </Link>
    </div>
  )
}
