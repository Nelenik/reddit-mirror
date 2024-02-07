import React from 'react';
import styles from './card.module.scss';
import { TextContent } from './TextContent';
import { PreviewImg } from './PreviewImg';
import { CardControls } from './CardControls';
import { Menu } from './Menu';
import { Counter } from './Counter';
import { ControlButton } from './ControlButton';
//svg
import SvgCommentsComp from 'assets/svg/comment.svg?react';
import SvgShareComp from 'assets/svg/share.svg?react';
import SvgSaveComp from 'assets/svg/save.svg?react'

interface ICardProps {
  urls: {
    avatar?: string;
    preview?: string;
  }
}

export function Card({ urls }: ICardProps) {
  return (
    <div className={styles.Card}>
      <TextContent avatar={urls.avatar} />
      <PreviewImg preview={urls.preview} />
      <CardControls>
        <Menu />
        <Counter />
        <ControlButton commentsCount='22'>
          <SvgCommentsComp />
        </ControlButton>
        <div className={styles.controlsLeft}>
          <ControlButton>
            <SvgShareComp />
          </ControlButton>
          <ControlButton>
            <SvgSaveComp />
          </ControlButton>
        </div>
      </CardControls>
    </div>
  );
}
