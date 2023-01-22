import React, { useEffect, useState } from 'react'
import {  LatestUrl } from './Url'
import axios from  'axios'
import { imageUrl } from './Url'
import '../Styles/latest.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const Latest = () => {
    const[latest,setLatest]=useState([])
   


    useEffect(()=>{
        axios.get(LatestUrl).then((response)=>{
         console.log(response.data.results) 
         setLatest(response.data.results)
         
        }).catch(err=>{
          console.log(err)
        })
        },[])

    return (




    <div>
<div  className='latest-movie'>
    {latest.map((movie,index)=>(
        <div>
            <Link to={`/view/${movie.id}`}>
            <div key={index}><img width='300px' src={`${imageUrl+movie.poster_path}`}  alt='movie.title'></img></div>
            <div>{movie.title || movie.name  } </div>
           </Link>
            </div>    ))    }



</div>


      
    </div>
  )
}

export default Latest
