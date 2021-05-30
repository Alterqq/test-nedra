import {
  ADD_CHECK_FILTER, REMOVE_CHECK_FILTER, SET_CARS,
  SET_RANGE_FILTER, SET_SEARCH
} from './types'

export const setCars = (payload) => ({type: SET_CARS, payload})
export const setSearch = (payload) => ({type: SET_SEARCH, payload})
export const addCheckFilter = (payload) => ({type: ADD_CHECK_FILTER, payload})
export const removeCheckFilter = (payload) => ({type: REMOVE_CHECK_FILTER, payload})
export const setRangeFilter = (payload) => ({type: SET_RANGE_FILTER, payload})
