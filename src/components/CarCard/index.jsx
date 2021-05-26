import React from 'react';
import {useDictionary} from '../../hooks/dictionary.hook';
import styles from './CarCard.module.scss'

const CarCard = ({
                   photo, brand, model,
                   year, fuel, bodyType,
                   price, mileage, transmission
                 }) => {
  const translate = useDictionary()
  return (
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={photo} alt={brand + model}/>
        </div>

        <div className={styles.stats}>
          <span className={styles.item}>Бренд: {brand}</span>
          <span className={styles.item}>Модель: {model}</span>
          <span className={styles.item}>Год выпуска: {year}</span>
          <span className={styles.item}>Топливо: {translate('fuel', fuel)}</span>
          <span className={styles.item}>Кузов: {translate('bodyType', bodyType)}</span>
          <span className={styles.item}>Коробка передач: {translate('transmission', transmission)}</span>
          <span className={styles.item}>Пробег: {mileage} км</span>
          <span className={styles.item}>Цена: {price} руб.</span>
        </div>
      </div>
  );
};

export default CarCard;
