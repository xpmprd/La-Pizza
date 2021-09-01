import React from 'react';
import styles from './styles.module.scss';

const Menups = ({ img, names, sostav, price }) => (
  <div className={styles.first}>
    <img
      src={img}
      alt="La Pizza"
    />
    <span className={styles.peperoni}>{names}</span>
    <span className={styles.Span2}>{sostav}</span>
    <div className={styles.div3}>
      
      <span className={styles.Span7}>
        {price}
      </span>
     
    </div>
     
  </div>  
);

export default Menups;
