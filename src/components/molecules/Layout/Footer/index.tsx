import React from 'react';
import Container from '../../../atoms/Container';
import styles from './index.module.css';
import Follow from './Follow';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.dolphin} />
      <div className={styles.mantaray} />
      <Container className={styles.flexColumn}>
        <Follow />
      </Container>
    </footer>
  );
}
