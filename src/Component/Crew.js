import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import '../Styles/cast.css'
import {  imageUrl } from './Url'




const Crew = () => {
const[castactor,setCastactor]=useState([])
const{id}=useParams()
const Castactor=`https://api.themoviedb.org/3/movie/${id}/credits?api_key=93149a89fbcf1434eb3d6752f8fca00c`

useEffect(() => {
    axios.get(Castactor)
      .then(response => {
        console.log(response.data) 
        setCastactor(response.data.cast )
      })
      .catch(error => console.log(error));
  }, []);

console.log(castactor)
console.log(Array.isArray(castactor));

  return (
    <div className='castlist'>
      <div>
        <h3>Cast</h3>
    
<div className='actor-list d-flex flex-wrap'>
    {castactor && Object.values(castactor).filter(actor => actor.known_for_department === "Acting").map((actor, index) => (
    <div className='actors m-2'>
<img src={actor.profile_path ?`${imageUrl+actor.profile_path}`:'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png'} width='150px' ></img>
    <div key={index}>
      <p>{actor.name}</p>
    </div>
    </div>
   ))}
  </div>
  </div>
        
  <div>
<h3>Producers</h3>

<div className='actor-list d-flex flex-wrap'>
    {castactor && Object.values(castactor).filter(actor => actor.known_for_department === "Production").map((actor, index) => (
    <div className='actors m-2'>
    <img src={actor.profile_path ?`${imageUrl+actor.profile_path}`:'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png'} width='150px' ></img>
    <div key={index}>
      <p>{actor.name}</p>
    </div>
    </div>
   ))}
  </div>




  </div>
    
      
        
     
     
  

    </div>
  )
}

export default Crew
