import React from 'react';
import {TextField} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {getSearch} from '../../redux/selectors';
import {setSearch} from '../../redux/actions';
import styles from './Sidebar.module.scss'

const Sidebar = () => {
  const search = useSelector(getSearch)
  const dispatch = useDispatch()
  const changeBrandFilterHandler = (e) => {
    dispatch(setSearch(e.target.value))
  }
  return (
      <div className={styles.sidebar}>
        <TextField
            value={search}
            onChange={changeBrandFilterHandler}
            id="standard-search"
            placeholder="Поиск"
            type="search"/>
      </div>
  );
};

export default Sidebar;
