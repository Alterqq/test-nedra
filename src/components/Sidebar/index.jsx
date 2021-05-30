import React, {useCallback, useEffect, useState} from 'react'
import {TextField} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {getCars, getSearch} from '../../redux/selectors'
import {setSearch} from '../../redux/actions'
import {CheckFilterItem, RangeFilterItem} from '../'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
  const search = useSelector(getSearch)
  const cars = useSelector(getCars)
  const dispatch = useDispatch()

  const onChangeFilter = (e) => {
    dispatch(setSearch(e.target.value))
  }

  const [checkFilterTypes, setCheckFilterTypes] = useState({
    brand: [],
    model: [],
    fuel: [],
    bodyType: [],
    transmission: [],
  })


  const getAllCheckFilter = useCallback(() => {
    const checkFilterTypesKeys = Object.keys(checkFilterTypes)
    checkFilterTypesKeys.forEach(type => {
      const setOfType = new Set()
      cars.forEach(car => {
        setOfType.add(car[type])
      })
      setCheckFilterTypes(prevState => {
        return {...prevState, [type]: Array.from(setOfType)}
      })
    })
  }, [cars])

  useEffect(() => {
    getAllCheckFilter()
  }, [getAllCheckFilter])

  return (
      <div className={styles.sidebar}>
        <TextField
            value={search}
            onChange={onChangeFilter}
            id="standard-search"
            placeholder="Поиск"
            type="search"
            classes={{root: styles.textField}}
        />

        <h3>Бренды:</h3>
        {checkFilterTypes.brand.map((brand, idx) => (
            <CheckFilterItem
                key={`${brand}_${idx}`}
                type="brand"
                item={brand}/>
        ))}
        <h3>Модели:</h3>
        {checkFilterTypes.model.map((model, idx) => (
            <CheckFilterItem
                key={`${model}_${idx}`}
                type="model"
                item={model}/>
        ))}
        <h3>Тип топлива:</h3>
        {checkFilterTypes.fuel.map((fuel, idx) => (
            <CheckFilterItem
                key={`${fuel}_${idx}`}
                type="fuel"
                needTranslate={true}
                item={fuel}/>
        ))}
        <h3>Кузов:</h3>
        {checkFilterTypes.bodyType.map((bodyType, idx) => (
            <CheckFilterItem
                key={`${bodyType}_${idx}`}
                type="bodyType"
                needTranslate={true}
                item={bodyType}/>
        ))}
        <h3>Коробка передач:</h3>
        {checkFilterTypes.transmission.map((transmission, idx) => (
            <CheckFilterItem
                key={`${transmission}_${idx}`}
                type="transmission"
                needTranslate={true}
                item={transmission}/>
        ))}

        <h3>Год выпуска:</h3>
        <RangeFilterItem min={1980} max={2021} type="year" units="г."/>

        <h3>Цена:</h3>
        <RangeFilterItem min={800_000} max={4_000_000} type="price" units="руб."/>

        <h3>Пробег:</h3>
        <RangeFilterItem min={200_000} max={600_000} type="mileage" units="км."/>
      </div>
  )
}

export default Sidebar
