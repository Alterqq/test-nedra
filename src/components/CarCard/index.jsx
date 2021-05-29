import React from 'react';
import {useDictionary} from '../../hooks/dictionary.hook';
import styles from './CarCard.module.scss'

const CarCard = ({
                   photo, brand, model,
                   year, fuel, bodyType,
                   price, mileage, transmission
                 }) => {
  const translate = useDictionary()
  const normalizeNum = (srt) => srt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  return (
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={photo} alt={brand + model}/>
        </div>

        <div className={styles.stats}>
          <span className={styles.item}>{brand} {model}, {year}</span>
          <span className={styles.item}>Топливо: {translate('fuel', fuel)}</span>
          <span className={styles.item}>Кузов: {translate('bodyType', bodyType)}</span>
          <span className={styles.item}>Коробка передач: {translate('transmission', transmission)}</span>
          <span className={styles.item}>Пробег: {normalizeNum(mileage)} км</span>
          <span className={`${styles.item} ${styles.price}`}>Цена: {normalizeNum(price)} руб.</span>
        </div>
      </div>
  );
};

export default CarCard;
