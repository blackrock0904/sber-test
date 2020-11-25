import React, { useContext } from 'react';
import styles from './Table.module.css';
import { Context } from '../store/Context';
import { Row } from './Row';

export const Table = () => {
  const { state } = useContext(Context);
  
  return (
    <div className={styles.table}>
      {state.rows.map(el => 
        <Row columns={el.axis.r} currency='Все валюты' delta={el.fDeltaPlan}/>
      )}
    </div>
  );
}
