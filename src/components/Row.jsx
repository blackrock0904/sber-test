import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Column } from './Column';
import { Delta } from './Delta';
import styles from './Row.module.css';

export const Row = ({ columns, delta, cursorPointer = false, setHandler = false }) => {

  return (
    <div className={styles.row}>
      {columns.map((el,i) =>
        <Column
          key={uuidv4()}
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
