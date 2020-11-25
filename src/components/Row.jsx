import React from 'react';
import { Column } from './Column';
import { Delta } from './Delta';
import styles from './Row.module.css';

export const Row = ({ columns, delta, cursorPointer = false, setHandler = false }) => {

  return (
    <div className={styles.row}>
      {columns.map((el,i) =>
        <Column
          key={el.nAxisID || Date.now().toString()+Math.random()}
          content={el.sAxisName || el.sName_RU}
          setHandler={setHandler}
          cursorPointer={cursorPointer}
          indexArr={i}
        />
      )}
      <Delta
        setHandler={setHandler}
        cursorPointer={cursorPointer}
        content={delta}
      />
    </div>
  );
}
