import React from 'react';
import styles from './menu.module.scss';

import { MenuTrigger } from './MenuTrigger';
import { MenuList } from './MenuList';

export function Menu() {
  return (
    <div className={styles.menu}>
      <MenuTrigger />
      <MenuList />
    </div>
  );
}
