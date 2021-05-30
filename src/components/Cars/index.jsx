import React, {useCallback, useEffect} from 'react'
import {useHttp} from '../../hooks/http.hook'
import {CarCard, Loader} from '../'
import {useDispatch, useSelector} from 'react-redux'
import {getCars, getFilteredCars} from '../../redux/selectors'
import {setCars} from '../../redux/actions'
import styles from './Cars.module.scss'

const Cars = () => {
  const {loading, request} = useHttp()
  const filteredCars = useSelector(getFilteredCars)
  const cars = useSelector(getCars)
  const dispatch = useDispatch()
  window.cars = cars

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

  if (loading) {
    return (
        <Loader/>
    )
  }
  return (
      <div className={styles.wrapper}>
        <div className={styles.carsList}>
          {!filteredCars.length && <span>Ничего не найдено</span>}
          {filteredCars.map((car, idx) => (<CarCard key={`${car}_${idx}`} {...car}/>))}
        </div>
      </div>
  )
}

export default Cars
