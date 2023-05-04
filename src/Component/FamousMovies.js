import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Styles/actor.css'
import { imageUrl } from './Url'
import { Link } from 'react-router-dom'

const FamousMovies = ({id}) => {

const[othermovies,setOthermovies]=useState([])
const prevmovies=`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=93149a89fbcf1434eb3d6752f8fca00c&language=en-US`

    useEffect(()=>{
        axios.get(prevmovies).then((response)=>{
         console.log(response.data) 
         setOthermovies(response.data.cast)
         
        }).catch(err=>{
          console.log(err)
        })
        },[])

  return (
    <div>
<div className='knowfor m-3'>Known For </div>
<div className='prev-movies d-flex flex-wrap m-4'>
{othermovies && othermovies.map((movie)=>
(<div className=" actor-lists m-4 ">
    <Link to={`/view/${movie.id}`}>
    <div><img src={`${imageUrl+movie.poster_path}`} alt={movie.title} width='180px'></img></div>
    <div>{movie.title}</div>
    </Link>




</div>)
)}


</div>


      
    </div>
  )
}

export default FamousMovies
