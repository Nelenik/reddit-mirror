import React from 'react';
import { generateRandomStr } from 'utils/generate_id';
import styles from './cardslist.module.scss';
import { Card } from './Card/Card';

//images for example
import avatar from 'assets/img/avatar.jpg';
import avatar2 from 'assets/img/avatar2.jpg';
import preview from 'assets/img/postimg.jpg';
import preview2 from 'assets/img/postimg2.jpg';

export function CardsList() {
  return (
    <ul className={styles.CardsList}>
      <li key={generateRandomStr()}>
        <Card urls={{ avatar, preview }} />
      </li>
      <li key={generateRandomStr()}>
        <Card urls={{ avatar: avatar2, preview: preview2 }} />
      </li>
    </ul>
  );
}
