import {useCallback} from 'react';

export const useFilter = (search) => {
  const filterBySearch = useCallback((car) => {
    const brand = car.brand.toLowerCase()
    const model = car.model.toLowerCase()
    const normalizedSearch = search.toLowerCase()
    return brand.includes(normalizedSearch) || model.includes(normalizedSearch)
  }, [search])

  return {filterBySearch}
}

