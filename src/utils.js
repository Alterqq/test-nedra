export const checkedFilters = (keys, car, filters) => {
  return keys.every(key => {
    return filters[key].length === 0 || (filters[key].includes(car[key]))
  })
}

export const rangedFilters = (keys, car, filters) => {
  return keys.every(key => {
    return car[key] >= filters[key][0] && car[key] <= filters[key][1]
  })
}
