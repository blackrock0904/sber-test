import React from 'react';
import styles from './Delta.module.css';
import { DeltaProgress } from './DeltaProgress';

export const Delta = ({ content }) => {
  return (
    <div className={styles.delta}>
      {(typeof content === 'string') ? content : <DeltaProgress content={content}/>}
    </div>
  )
}
