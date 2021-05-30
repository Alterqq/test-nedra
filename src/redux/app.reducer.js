import {
  ADD_CHECK_FILTER, REMOVE_CHECK_FILTER, SET_CARS,
  SET_RANGE_FILTER, SET_SEARCH
} from './types';

const initialState = {
  cars: [],
  search: '',
  checkFilters: {
    brand: [],
    model: [],
    fuel: [],
    bodyType: [],
    transmission: [],
  },
  rangeFilters: {
    year: [0, 1],
    price: [0, 1],
    mileage: [0, 1],
  }
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARS:
      return {...state, cars: action.payload}
    case SET_SEARCH:
      return {...state, search: action.payload}
    case ADD_CHECK_FILTER:
      return {
        ...state,
        checkFilters: {
          ...state.checkFilters,
          [action.payload.filterType]: [...state.checkFilters[action.payload.filterType], action.payload.data]
        }
      }
    case REMOVE_CHECK_FILTER:
      return {
        ...state,
        checkFilters: {
          ...state.checkFilters,
          [action.payload.filterType]: state.checkFilters[action.payload.filterType].filter(item => {
            return item !== action.payload.data
          })
        }
      }
    case SET_RANGE_FILTER:
      return {
        ...state,
        rangeFilters: {
          ...state.rangeFilters,
          [action.payload.filterType]: action.payload.data
        }
      }
    default:
      return state
  }
}

export default appReducer
