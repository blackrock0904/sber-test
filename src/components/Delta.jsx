import React, { useContext } from 'react';
import { Context } from '../store/Context';
import styles from './Delta.module.css';
import { DeltaProgress } from './DeltaProgress';
import { sort_delta } from '../store/actions';

export const Delta = ({ value, setClickHandler }) => {
  const { dispatch } = useContext(Context);

  return (
    <div
      className={`${styles.delta} ${setClickHandler && styles.cursorPointer}`}
      onClick={() => { setClickHandler && dispatch(sort_delta('fDeltaPlan')) }}
    >
      {(typeof value === 'string') ? value : <DeltaProgress value={value} />}
    </div>
  )
}
