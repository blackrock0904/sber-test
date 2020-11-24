import React, { useContext } from 'react';
import styles from './Table.module.css';
import { Context } from '../store/Context';
import { Row } from './Row';

export const Table = () => {
  const { state } = useContext(Context);
  console.log(state.fa.fa_data.r);
  
  return (
    <div className={styles.table}>
      {state.fa.fa_data.r.map(el => 
        <Row columns={el.axis.r} currency='Все валюты' delta={el.fDeltaPlan}/>
      )}
    </div>
  );
}
