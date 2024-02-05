import React from 'react';
import styles from './menutrigger.module.scss';

import SvgMenuPoints from "assets/svg/menu-points.svg?react"

export function MenuTrigger() {
  return (
    <button className={styles.menuTrigger} type='button'>
      <SvgMenuPoints />
    </button>
  );
}
