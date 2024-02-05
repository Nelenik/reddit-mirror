import React from 'react';
import styles from './roundbtn.module.scss';

interface IRoundBtnProps {
  children?: React.ReactNode;
}

export function RoundBtn({ children }: IRoundBtnProps) {
  return (
    <button type='button' className={styles.RoundBtn}>
      {children}
    </button>
  );
}
