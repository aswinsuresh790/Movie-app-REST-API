import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { imageUrl } from '../Component/Url'
import Header from '../Component/Header'
import '../Styles/actor.css'
import FamousMovies from '../Component/FamousMovies'

const ActorDetails = () => {
    const{id}=useParams()
    const[actordetail,setActordetail]=useState([])

const ActorURL=`https://api.themoviedb.org/3/person/${id}?api_key=93149a89fbcf1434eb3d6752f8fca00c&language=en-US`
    useEffect(()=>{
        axios.get(ActorURL).then((response)=>{
         console.log(response.data) 
         setActordetail(response.data)
         
        }).catch(err=>{
          console.log(err)
        })
        },[])


        console.log(actordetail)
  return (
    <div className='actorpage' style={{backgroundColor:"black"}}>
        <Header/>

      <div className='full-actor-detail m-3 d-flex'>
        <div><img width='190px' src={`${imageUrl+actordetail.profile_path}`}  alt={actordetail.name}></img></div>
<div className='m-3  '><div className='actor-name'>{actordetail.name}</div>
<div className='actor-bio'>{actordetail.biography}</div>
<div  className='actor-bio'>Gender: &nbsp; &nbsp;  {actordetail.gender}</div>
<div className='actor-bio'>Date Of Birth: : &nbsp; &nbsp;  {actordetail.birthday}</div>
</div>


      </div>


<FamousMovies id={id}/>
    </div>
  )
}

export default ActorDetails
