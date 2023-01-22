import { initialTitlesState } from "./InitialState"

export const titlesReducer = (state, {type, payload}) => {
    switch(type) {




      case 'SET_INITIAL':
        return initialTitlesState
  
      case 'ADD_TITLES':
        return {
          page: state.page + 1,
          totalPages: payload.total_pages,
          totalTitles: payload.total_results,
          // data: [...state.data, ...payload],
  
          // Handle duplicates? So that react doesn't complain about same keys
          data: [
            ...new Map(
              [...state.data, ...payload.results].map(el => [el.id, el])
            ).values()
          ],
        }
  
      default:
        throw new Error()
    }
  }