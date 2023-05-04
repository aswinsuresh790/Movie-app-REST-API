import { initialTitlesState } from "./InitialState"
export const ADD_MOVIE='ADD_MOVIE'
export const FETCH_DATA_SUCCESS='FETCH_DATA_SUCCESS'
export const FETCH_DATA_ERROR="FETCH_DATA_ERROR"

export const titlesReducer = (state, action) => {
    switch(action.type) {
        
          case ADD_MOVIE:
            return {
              ...state,
              movies: [...state.movies,action.payload]
            }
            case FETCH_DATA_SUCCESS:
      return { ...state, data: action.data, error: null };
             case FETCH_DATA_ERROR:
      return { ...state, error: action.error };
  
      default:
        return state
        throw new Error()
    }
  }