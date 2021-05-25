import React, {useState} from 'react';
import styles from './Sidebar.module.scss'
import {TextField} from '@material-ui/core';

const Sidebar = () => {
  const [brandFilter, setBrandFilter] = useState('')
  const changeBrandFilterHandler = (e) => {
    setBrandFilter(e.target.value)
  }
  return (
      <div className={styles.sidebar}>
        <TextField
            value={brandFilter}
            onChange={changeBrandFilterHandler}
            id="standard-search"
            placeholder="Поиск"
            type="search"/>
      </div>
  );
};

export default Sidebar;
