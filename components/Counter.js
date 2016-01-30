import React from 'react';
import styles from '../styles/Counter.css'

export default function({ value, onIncrement, onDecrement }) {
  let className = value > 0 ? styles.greater : value < 0 ? styles.less : styles.normal;

  return (
    <div>
      <h1 className={className}>{value}</h1>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
