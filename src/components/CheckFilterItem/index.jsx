import React, {useCallback, useState} from 'react'
import {Checkbox, FormControlLabel} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {addCheckFilter, removeCheckFilter} from '../../redux/actions'
import {useDictionary} from '../../hooks/dictionary.hook'
import styles from './CheckFilterItem.module.scss'

const FilterItem = ({item, type, needTranslate}) => {
  const [checkedItem, setCheckedItem] = useState(false)
  const translate = useDictionary()
  const dispatch = useDispatch()

  const onToggleCheckbox = () => {
    setCheckedItem(!checkedItem)
    setFilterTypes()
  }

  const setFilterTypes = useCallback(() => {
    const payload = {filterType: type, data: item}
    if (!checkedItem) {
      dispatch(addCheckFilter(payload))
    } else {
      dispatch(removeCheckFilter(payload))
    }
  }, [dispatch, type, item, checkedItem])

  return (
      <>
        <FormControlLabel
            control={
              <Checkbox
                  checked={checkedItem}
                  onChange={onToggleCheckbox}
                  name={item}
                  color="primary"
                  classes={{root: styles.filterCheck}}
              />
            }
            label={needTranslate ? translate(type, item) : item}
        />
      </>
  )
}

export default FilterItem
