// import React from 'react';
import styles from './menu.module.scss';

import { MenuTrigger } from './MenuTrigger';
import { MenuList } from './MenuList';
import { Dropdown } from '@/components/Dropdown';
import { ReactElement } from 'react';

type RenderComponent = {
  (a: () => void, b?: boolean): ReactElement
}
export function Menu() {
  const renderTrigger: RenderComponent = (toggleCb, isDropdownOpen) => <MenuTrigger toggleMenu={toggleCb} isOpen={isDropdownOpen} />;
  const renderList: RenderComponent = (closeCb) => <MenuList closeMenu={closeCb} />


  return (
    <>
      <Dropdown
        className={styles.menu}
        renderTrigger={renderTrigger}
        renderList={renderList}
      />
    </>
  );
}
