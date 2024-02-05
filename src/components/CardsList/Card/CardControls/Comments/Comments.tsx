import React from 'react';
import styles from './comments.module.scss';

import SvgCommentsComp from 'assets/svg/comment.svg?react';

export function Comments() {
  return (
    <button type='button' className={styles.Comments} data-comments-count='22'>
      <SvgCommentsComp />
    </button>
  );
}
