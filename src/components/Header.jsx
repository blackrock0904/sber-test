import React, { useContext } from 'react';
import { Context } from '../store/Context';
import styles from './Header.module.css';
import { TableRow } from './TableRow';

export const Header = () => {
  const { state } = useContext(Context);
  
  return (
    <div className={styles.header}>
      <TableRow 
        columns={state.titles.map(el => ({...el, sAxisName: el.sAxisName.toUpperCase()}))} 
        delta='ОТКЛОНЕНИЕ ОТ ПЛАНА, П.П.' 
        setClickHandler={true}      
        />
    </div>
  )
}
