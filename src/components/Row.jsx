import React from 'react';
import { Column } from './Column';
import styles from './Row.module.css';
import { Delta } from './Delta';

export const Row = ({columns, currency, delta}) => {
  return (
    <div className={styles.row}>
      {columns.map(el => <Column key={el.nAxisID} content={el.sAxisName || el.sName_RU}/>)}
      <Column content={currency}/>
      <Delta content={delta}/>
      
    </div>
  );
}
