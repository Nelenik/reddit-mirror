import React from 'react';
import styles from './textcontent.module.scss';

interface ITextContentProps {
  avatar?: string
}

export function TextContent({ avatar }: ITextContentProps) {
  return (
    <div className={styles.TextContent}>
      <div className={styles.metadata}>
        <img src={avatar} alt="author avatar" className={styles.avatar} />
        <a href="#user-link" className={`${styles.userLink}`}>Владимир Петров</a>
        <span className={styles.createdAt}>
          <span>опубликовано</span> 5 часов назад</span>
      </div>
      <h2 className={styles.cardTitle}>
        <a href="#post-link" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности...
        </a>
      </h2>
    </div>
  );
}
