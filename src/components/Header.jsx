import React, { useContext } from 'react';
import { Context } from '../store/Context';
import styles from './Header.module.css';
import { Row } from './Row';

export const Header = () => {
  const { state } = useContext(Context);

  return (
    <div className={styles.header}>
      <Row columns={state.fa.fa_data.axis.r.map(el => ({...el, sAxisName: el.sAxisName.toUpperCase()}))} currency='ВАЛЮТА' delta='ОТКЛОНЕНИЕ ОТ ПЛАНА, П.П.' />
    </div>
  )
}
