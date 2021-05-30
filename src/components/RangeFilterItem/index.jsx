import React, {useEffect, useState} from 'react'
import Slider from '@material-ui/core/Slider'
import {useDispatch} from 'react-redux'
import {useDebounce} from 'use-debounce'
import {setRangeFilter} from '../../redux/actions'
import styles from './RangeFilterItem.module.scss'

const RangeFilterItem = ({units, type, min, max}) => {
  const [value, setValue] = useState([min, max])
  const dispatch = useDispatch()
  const [debounceValue] = useDebounce(value, 400)

  const onChangeValue = (e, data) => {
    setValue(data)
  }

  useEffect(() => {
    dispatch(setRangeFilter({filterType: type, data: debounceValue}))
  }, [debounceValue, dispatch, type])
  return (
      <>
        <div className={styles.values}>
          <span>{min} {units}</span>
          <span>{max} {units}</span>
        </div>
        <Slider
            onChange={onChangeValue}
            value={value}
            min={min}
            max={max}/>
            <div className={styles.current}>
              <span>{value[0]} {units}</span>
              <span>{value[1]} {units}</span>
            </div>
      </>
  )
}

export default RangeFilterItem
