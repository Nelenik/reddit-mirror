import React from 'react';
import styles from './previewimg.module.scss';

interface IPreviewImgProps {
  preview?: string
}

export function PreviewImg({ preview }: IPreviewImgProps) {
  return (
    <img src={preview} alt="preview" className={styles.PreviewImg} />
  );
}
