import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Table.module.css';
import { Context } from '../store/Context';
import { Row } from './Row';

export const Table = () => {
  const { state } = useContext(Context);
  
  return (
    <div className={styles.table}>
      {state.rows.map(el => 
        <Row 
          key={uuidv4()} 
          columns={el.axis.r} 
          delta={el.fDeltaPlan}/>
      )}
    </div>
  );
}
