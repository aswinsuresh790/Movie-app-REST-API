import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMovie } from '../Redux/actions';

const Addmovies = () => {
    const [newMovie, setNewMovie] = useState({});
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMovie(newMovie));
        setNewMovie({});
      }
  return (
    <div>
         <form onSubmit={handleSubmit}>
      <input 
        value={newMovie.title}
        onChange={e => setNewMovie({ ...newMovie, title: e.target.value })}
        placeholder="Title"
        type="text"
        required
      />
      </form>
    </div>
  )
}

export default Addmovies
