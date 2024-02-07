import React from 'react';
import styles from './menu.module.scss';

import { ControlButton } from '../ControlButton';
import SvgCommentsComp from 'assets/svg/comment.svg?react';
import SvgShareComp from 'assets/svg/share.svg?react';
import SvgHideComp from 'assets/svg/hide.svg?react';
import SvgSaveComp from 'assets/svg/save.svg?react';
import SvgReportComp from 'assets/svg/report.svg?react';

interface IMenuListProps {
  closeMenu: () => void
}

export function MenuList({ closeMenu }: IMenuListProps) {
  return (
    <ul className={styles['menu__list']}>
      <li className={styles['menu__item']}>
        <ControlButton isMenu={true} buttonText='Комментарии'>
          <SvgCommentsComp />
        </ControlButton>
      </li>
      <li className={styles['menu__item']}>
        <ControlButton isMenu={true} buttonText='Поделиться'>
          <SvgShareComp />
        </ControlButton>
      </li>
      <li className={styles['menu__item']}>
        <ControlButton isMenu={true} buttonText='Скрыть'>
          <SvgHideComp />
        </ControlButton>
      </li>
      <li className={styles['menu__item']}>
        <ControlButton isMenu={true} buttonText='Сохранить'>
          <SvgSaveComp />
        </ControlButton>
      </li>
      <li className={styles['menu__item']}>
        <ControlButton isMenu={true} buttonText='Пожаловаться'>
          <SvgReportComp />
        </ControlButton>
      </li>
      <li className={styles['menu__item']}>
        <button className={styles['menu__close']} onClick={closeMenu}>
          Закрыть
        </button>
      </li>
    </ul>
  );
}
