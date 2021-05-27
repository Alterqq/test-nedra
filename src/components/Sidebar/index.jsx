import React, {useCallback, useEffect, useState} from 'react';
import {TextField} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {getCars, getSearch} from '../../redux/selectors';
import {setSearch} from '../../redux/actions';
import styles from './Sidebar.module.scss'
import {FormControlLabel, Checkbox} from "@material-ui/core";

const Sidebar = () => {
  const search = useSelector(getSearch)
  const cars = useSelector(getCars)
  const dispatch = useDispatch()
  const changeBrandFilterHandler = (e) => {
    dispatch(setSearch(e.target.value))
  }

  const [brands, setBrands] = useState([])

  const getAllBrands = useCallback(() => {
    const setCars = new Set()
    cars.forEach(car => {
      setCars.add(car.brand)
    })
    setBrands(Array.from(setCars))
  }, [cars])

  useEffect(() => {
    getAllBrands()
  }, [getAllBrands])

  const [filters, setFilters] = useState({
    brand: false
  })

  const handleChange = (e) => {
    setFilters(state => ({...state, [e.target.name]: e.target.checked}))
  }
  return (
      <div className={styles.sidebar}>
        <TextField
            value={search}
            onChange={changeBrandFilterHandler}
            id="standard-search"
            placeholder="Поиск"
            type="search"
            classes={{root: styles.textField}}
        />

        <h3>Brands</h3>
        {brands.map(brand => (
            <FormControlLabel
                key={brand}
                control={
                  <Checkbox
                      checked={filters.brand}
                      onChange={handleChange}
                      name={brand}
                      color="primary"
                      classes={{root: styles.filterCheck}}
                  />
                }
                label={brand}
            />
        ))}

      </div>
  );
};

export default Sidebar;
