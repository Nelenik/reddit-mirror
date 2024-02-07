import React from 'react';
import styles from './controlbutton.module.scss';
import { NOOP } from 'utils/noop';

interface IControlButtonProps {
  children: React.ReactNode,
  isMenu?: boolean,
  additStyle?: string,
  buttonText?: string,
  onClick?: () => void,
  commentsCount?: string
}

export function ControlButton({
  children,
  isMenu,
  additStyle = '',
  buttonText,
  onClick = NOOP,
  commentsCount,
}: IControlButtonProps) {

  const classNamePart = (isMenu && styles['control--menu-style'])
    || (!isMenu && commentsCount && styles['control--mobComment'])
    || styles['control--mobGrey'];

  return (
    <button
      type='button'
      className={`${styles.control} ${classNamePart} ${additStyle}`}
      onClick={onClick}
      {...(commentsCount && { "data-comments-count": commentsCount })}
    >
      {children}
      {isMenu && <span>{buttonText}</span>}
    </button>
  );
}
