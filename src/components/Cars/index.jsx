import React, {useCallback, useEffect, useState} from 'react';
import {useHttp} from '../../hooks/http.hook';
import {CarCard, Loader} from '../';
import styles from './Cars.module.scss'

const Cars = () => {
  const {loading, request} = useHttp()

  const [cars, setCars] = useState([])

  const loadCars = useCallback(async () => {
    try {
      const cars = await request('/db.json', 'GET', null, {})
      setCars(cars)
    } catch (e) {
      console.log(e)
    }
  }, [request])

  useEffect(() => {
    loadCars()
  }, [loadCars])

  if (loading) {
    return (
        <Loader />
    )
  }
  return (
      <div className={styles.wrapper}>
        <div className={styles.carsList}>
          {cars.map((c, idx) => (<CarCard key={`${c}_${idx}`} car={c}/>))}
        </div>
      </div>
  );
};

export default Cars;
