import React from 'react';
import styles from './styles.module.scss';

const Menuprintpastr = ({ img, names, sostav, price }) => (
  
  <div className={styles.first}>
    <img
      src={img}
      alt="LaPizza Skopje"
    />
    <span className={styles.peperoni}>{names}</span>
    <span className={styles.Span2}>{sostav}</span>
    <div className={styles.divPastr3}>
      <span className={styles.SpanPastr3}>
        {price}
      </span>
     
    </div>
    <div className={styles.divPastr4}>
      <span className={styles.SpanPastr5}>50cm</span>
   
    </div>
  </div>    
);

export default Menuprintpastr;
