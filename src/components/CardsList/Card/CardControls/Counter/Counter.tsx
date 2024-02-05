import React from 'react';
import styles from './counter.module.scss';
//svg
import SvgCounterDown from "assets/svg/counter-down.svg?react";
import SvgCounterUp from "assets/svg/counter-up.svg?react";

export function Counter() {
  return (
    <div className={styles.Counter}>
      <button className={styles.upBtn}>
        <SvgCounterUp />
      </button>
      <span className={styles.counterValue}>331</span>
      <button className={styles.downBtn}>
        <SvgCounterDown />
      </button>
    </div>
  );
}
