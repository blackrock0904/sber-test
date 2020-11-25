import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TableColumn } from './TableColumn';
import { Delta } from './Delta';
import styles from './TableRow.module.css';

export const TableRow = ({ columns, delta, setClickHandler = false }) => {

  return (
    <div className={styles.row}>
      {columns.map((el,i) =>
        <TableColumn
          key={uuidv4()}
          value={el.sAxisName || el.sName_RU}
          setClickHandler={setClickHandler}
          indexArr={i}
        />
      )}
      <Delta
        setClickHandler={setClickHandler}
        value={delta}
      />
    </div>
  );
}
