import React from 'react';
import { Column } from './Column';
import styles from './Row.module.css';
import { Delta } from './Delta';

export const Row = ({ columns, currency, delta, cursorPointer = false, setHandler = false }) => {

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
      {/* <Column
        content={currency}
        setHandler={setHandler}
        cursorPointer={cursorPointer}
      /> */}
      <Delta
        setHandler={setHandler}
        cursorPointer={cursorPointer}
        content={delta}
      />
    </div>
  );
}
