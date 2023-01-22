import React, { useEffect, useState,useRef } from 'react'
import axios from 'axios'
import { imageUrl } from './Url';
import '../Styles/seachbar.css'
import { Link } from 'react-router-dom';
const SeachBar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const initial = useRef(true)
    const apikey='93149a89fbcf1434eb3d6752f8fca00c'
    //search hook for search movie 
   
    //   clear the input 

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchQuery}`);
          setSearchResults(res.data.results);
        
        } catch (err) {
          console.error(err);
        }
        
    
    }






  return (
    <div className=''>
        <div className='searchbar'>
         <form className='searchinputs' onSubmit={handleSearch}>
        <input 
          value={searchQuery}
          onChange={e => setSearchQuery(e.currentTarget.value)}
          placeholder="Search Movie" 
          type="text"
        />
        <button type="submit">Search</button>
      </form>
      {searchResults ? searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <div className='movielists '>
            {searchResults.map((result) =>(
                
                <Link to={`/view/${result.id}`}>
                <div >
                    
                    <div className='image-movie'><img   width="300px" src={`${imageUrl+result.poster_path}`}  alt={result.title}></img> </div>
              <div key={result.id}>{result.title}</div>
              <div >{result.release_date}  </div>
             </div>
             </Link>
            ))}
          </div>
        </div>
       ):<div>Loading...</div>}
    </div>








      
    </div>
  )
}

export default SeachBar
