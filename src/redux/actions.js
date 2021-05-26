import {FILTER_CARS, SET_CARS, SET_SEARCH} from './types';
export const setCars = (payload) => ({type: SET_CARS, payload})
export const setSearch = (payload) => ({type: SET_SEARCH, payload})
export const filterCars = (payload) => ({type: FILTER_CARS, payload})
