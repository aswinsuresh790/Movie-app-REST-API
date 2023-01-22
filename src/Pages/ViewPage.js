import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import '../Styles/view.css'


import { Card, Image, Container, Row, Col, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { APikey, imageUrl } from '../Component/Url';
import Header from '../Component/Header';
import Crew from '../Component/Crew';

const ViewPage = () => {
    const {id}=useParams()
   
    const [loading, setLoading] = useState(true)
    const [selectedActorID, setSelectedActorID] = useState(null)
    const [selectedmovie, setSelectedmovie] = useState([])


    useEffect(()=>{
     axios.get( `https://api.themoviedb.org/3/movie/${id}?api_key=${APikey}`)
     .then((response)=>{
      console.log(response.data) 
      setSelectedmovie(response.data)
    
     }
     
     )
    },[])
   




   
  return (
  <div>
    <Header/>
    <div className='cards'>
      {selectedmovie && 
      <div>
        <div className='banner'><img  src={`${imageUrl+selectedmovie.backdrop_path}`} width='100%' height='350px'></img> </div>
        <div className='poster+genre d-flex m-3'>
          <div><img src={`${imageUrl+selectedmovie.poster_path}`} width="120px"></img></div>
          <div className='m-1 title-movie'>{selectedmovie.original_title}
          <div>
          
          {selectedmovie && selectedmovie.genres &&
   <div  className=' d-flex flex-wrap' key={selectedmovie.id}>
    <div className='genres-heading'>Genres</div>
     {selectedmovie.genres.map((genre, index) => (
       <div key={index} >
         <div className='btn btn-outline-warning m-4'>{genre.name}</div>
       </div>
     ))}
   <div className='describe '><div className='plot'>PLOT</div>{selectedmovie.overview}</div>   
   </div>

  
}
            
            
            </div>


              </div>  
              
              </div>
      </div>
}
    </div>





















    <Crew/>
  </div>
 
  
  
    )
}
                
export default ViewPage
