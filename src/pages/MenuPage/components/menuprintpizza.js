import React from 'react';
import styles from './styles.module.scss';

const Menuprintpizza = ({ img, names, sostav, priceSmall, priceBig }) => (
  <div className={styles.first}>
    <img
      src={img}
      alt="La Pizza"
    />
    <span className={styles.peperoni}>{names}</span>
    <span className={styles.Span2}>{sostav}</span>
    <div className={styles.div3}>
      <span className={styles.Span3}>
        {priceSmall}
      </span>
      <span className={styles.Span4}>
        {priceBig}
      </span>
     
    </div>
    <div className={styles.div4}>
      <span className={styles.Span5}>Фамилијарна 40cm</span>
      <span className={styles.Span6}>Средна 30cm</span>
    </div>
  </div>  
);

export default Menuprintpizza;
