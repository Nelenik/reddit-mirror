import React from 'react';
import styles from './menu.module.scss';
import SvgMenuPoints from "assets/svg/menu-points.svg?react"

export function Menu() {
  return (
    <div className={styles.menu}>
      <button className={styles.trigger} type='button'>
        <SvgMenuPoints />
      </button>
    </div>
  );
}
