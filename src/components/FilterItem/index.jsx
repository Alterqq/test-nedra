import React, {useState} from 'react';
import {Checkbox, FormControlLabel} from '@material-ui/core';
import styles from './FilterItem.module.scss';

const FilterItem = ({item}) => {
  const [checkedItem, setCheckedItem] = useState(false)
  const onToggleCheckbox = () => {
    setCheckedItem(!checkedItem)
  }
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
            label={item}
        />
      </>
  );
};

export default FilterItem;
