import { ADD_MOVIE } from './Moviereducer';

export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: newMovie
  }
}