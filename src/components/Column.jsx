import React, { useContext } from 'react';
import styles from './Column.module.css';
import { sort_columns } from '../store/actions';
import { Context } from '../store/Context';

export const Column = ({ content, setHandler, cursorPointer, indexArr }) => {
  const { dispatch } = useContext(Context);

  return (
    <div
      className={`${styles.column} ${cursorPointer && styles.cursorPointer}`}
      onClick={() => { setHandler && dispatch(sort_columns(indexArr)) }}
    >
      {content}
    </div>
  )
}
