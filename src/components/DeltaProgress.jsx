import React, { useContext } from 'react';
import styles from './DeltaProgress.module.css';
import { Context } from '../store/Context';
import { ProgressBar } from './ProgressBar';

export const DeltaProgress = ({ value }) => {
  const { state } = useContext(Context);
  const completed = Math.round(100 / state.maxDelta * value);

  return (
    <div className={styles.deltaProgress}>
      <div>
        {(value > 0) && <ProgressBar bgcolor='#EE4F5A' completed={completed} />}
      </div>
      <div>
        {`${(completed > 0) ? '+' + completed : completed} п.п.`}
      </div>
      <div>
        {(value < 0) && <ProgressBar bgcolor='#2dce7d' completed={completed} />}
      </div>
    </div >
  )
}
