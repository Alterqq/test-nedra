import React from 'react';
import styles from './CarCard.module.scss'

const CarCard = ({car}) => {
  return (
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={car.photo} alt={car.brand + car.model}/>
        </div>

        <div className={styles.stats}>
stst
        </div>
      </div>
  );
};

export default CarCard;
