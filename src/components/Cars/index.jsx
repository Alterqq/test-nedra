import React, {useCallback, useEffect} from 'react';
import {useHttp} from '../../hooks/http.hook';
import {CarCard, Loader} from '../';
import {useDispatch, useSelector} from 'react-redux';
import {getCars, getFilteredCars, getSearch} from '../../redux/selectors';
import {filterCars, setCars} from '../../redux/actions';
import {useFilter} from '../../hooks/search.hook';
import styles from './Cars.module.scss'

const Cars = () => {
  const {loading, request} = useHttp()
  const cars = useSelector(getCars)
  const search = useSelector(getSearch)
  const filteredCars = useSelector(getFilteredCars)
  const dispatch = useDispatch()
  const {filterBySearch} = useFilter(search)

  const loadCars = useCallback(async () => {
    try {
      const cars = await request('/db.json')
      dispatch(setCars(cars))
    } catch (e) {
      console.log(e)
    }
  }, [request, dispatch])

  useEffect(() => {
    loadCars()
  }, [loadCars])

  useEffect(() => {
    dispatch(filterCars(cars.filter(filterBySearch)))
  }, [cars, dispatch, filterBySearch])

  if (loading) {
    return (
        <Loader/>
    )
  }
  return (
      <div className={styles.wrapper}>
        <div className={styles.carsList}>
          {filteredCars.map((car, idx) => (<CarCard key={`${car}_${idx}`} {...car}/>))}
        </div>
      </div>
  );
};

export default Cars;
