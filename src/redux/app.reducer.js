import {FILTER_CARS, SET_CARS, SET_SEARCH} from './types';

const initialState = {
  cars: [],
  filteredCars: [],
  search: ''
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARS:
      return {...state, cars: action.payload}
    case SET_SEARCH:
      return {...state, search: action.payload}
    case FILTER_CARS:
      return {...state, filteredCars: action.payload}
    default:
      return state
  }
}

export default appReducer
