import React from 'react';
import styles from './cardcontrols.module.scss';

interface ICardControlsProps {
  children?: React.ReactNode;
}

export function CardControls({ children }: ICardControlsProps) {
  return (
    <div className={styles.CardControls}>
      {children}
    </div>
  );
}
