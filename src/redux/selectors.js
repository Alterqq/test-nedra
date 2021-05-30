import {createSelector} from 'reselect'
import {checkedFilters, rangedFilters} from '../utils'

export const getCars = (state) => state.app.cars
export const getSearch = (state) => state.app.search
export const getCheckFilters = (state) => state.app.checkFilters
export const getRangeFilters = (state) => state.app.rangeFilters

export const getFilteredCars = createSelector(
    getCars, getSearch,
    getCheckFilters, getRangeFilters,
    (cars, search, checkFilters, rangeFilters) => {
      const filtered = []

      const checkFilterKeys = Object.keys(checkFilters)
      const rangeFilterKeys = Object.keys(rangeFilters)

      cars.forEach(car => {
        const brand = car.brand.toLowerCase()
        const model = car.model.toLowerCase()
        const normalizedSearch = search.toLowerCase()

        if (rangedFilters(rangeFilterKeys, car, rangeFilters) && checkedFilters(checkFilterKeys, car, checkFilters)
            && (brand.includes(normalizedSearch) || model.includes(normalizedSearch))
        ) {
          filtered.push(car)
        }
      })
      return filtered
    })


