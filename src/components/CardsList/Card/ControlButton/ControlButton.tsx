import React from 'react';
import styles from './controlbutton.module.scss';
import { NOOP } from 'utils/noop';

interface IControlButtonProps {
  children: React.ReactNode,
  isDesktop?: boolean,
  additStyle?: string,
  buttonText?: string,
  onClick?: () => void,
  commentsCount?: string
}

export function ControlButton({
  children,
  isDesktop,
  additStyle = '',
  buttonText,
  onClick = NOOP,
  commentsCount,
}: IControlButtonProps) {

  const classNamePart = (isDesktop && styles['control--desk'])
    || (!isDesktop && commentsCount && styles['control--mobComment'])
    || styles['control--mobGrey'];

  return (
    <button
      type='button'
      className={`${styles.control} ${classNamePart} ${additStyle}`}
      onClick={onClick}
      {...(commentsCount && { "data-comments-count": commentsCount })}
    >
      {children}
      {isDesktop && <span>{buttonText}</span>}
    </button>
  );
}
