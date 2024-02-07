import styles from './menu.module.scss';

import SvgMenuPoints from "assets/svg/menu-points.svg?react"

interface IMenuTriggerProps {
  toggleMenu: () => void,
  isOpen?: boolean
}

export function MenuTrigger({ toggleMenu, isOpen }: IMenuTriggerProps) {
  return (
    <button
      className={`${styles['menu__trigger']} ${isOpen && styles['menu__trigger--active'] || ''}`}
      type='button'
      onClick={toggleMenu}
    >
      <SvgMenuPoints />
    </button>
  );
}
