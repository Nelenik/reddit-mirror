import React from 'react';
import styles from './header.module.scss';

interface IHeaderProps {
  children?: React.ReactNode;
}

export function Header({ children }: IHeaderProps) {
  return (
    <header className={styles.header}>
      {children}

    </header>
  );
}
