import React from 'react';
import styles from './Column.module.css';

export const Column = ({ content }) => {
  return <div className={styles.column}>{content}</div>;
}
