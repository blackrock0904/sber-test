import React, { useContext } from 'react';
import styles from './TableColumn.module.css';
import { sort_columns } from '../store/actions';
import { Context } from '../store/Context';

export const TableColumn = ({ value, setClickHandler, indexArr }) => {
  const { dispatch } = useContext(Context);

  return (
    <div
      className={`${styles.column} ${setClickHandler && styles.cursorPointer}`}
      onClick={() => { setClickHandler && dispatch(sort_columns(indexArr)) }}
    >
      {value}
    </div>
  )
}
