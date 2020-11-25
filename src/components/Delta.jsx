import React, { useContext } from 'react';
import { Context } from '../store/Context';
import styles from './Delta.module.css';
import { DeltaProgress } from './DeltaProgress';
import { sort_delta } from '../store/actions';

export const Delta = ({ content, setHandler, cursorPointer }) => {
  const { dispatch } = useContext(Context);

  return (
    <div
      className={`${styles.delta} ${cursorPointer && styles.cursorPointer}`}
      onClick={() => { setHandler && dispatch(sort_delta('fDeltaPlan')) }}
    >
      {(typeof content === 'string') ? content : <DeltaProgress content={content} />}
    </div>
  )
}
