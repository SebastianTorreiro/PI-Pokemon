import React from 'react'
import noLoad from "../../imgs/noLoad.jpg"
import "./pokemon.css"
export default function Pokemon({  name, types,  image,  id }){
  return (
    <div className={`card-conteiner-${types[0]}`}>
      <div className='image-card'>
      {image ? (<img className={`pokemon-img`} src={image} alt='Pokemon Image'/>) : <img src={noLoad} alt='Pokemon Image'/>}
      </div>
      <div className='text-card'>
      {name ? (<div className='title'>{name}</div>) : <div className='title'>NotFound</div>}
        <div className='types'>
        {types ? (<ul>Types:<li>{types.join(" ")}</li></ul>) :  <div>Loading</div>}
        </div>
       
      </div>
    </div>
  )
}
 