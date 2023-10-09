import React, { ReactElement } from 'react';
import Image from 'next/image';
import LogoSVG from '@oceanprotocol/art/logo/logo.svg';
import styles from './style.module.css';

export default function Logo({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <Image
      src={LogoSVG}
      alt="Ocean Logo"
      width={45}
      height={45}
      className={`${styles.logo} ${className && className}`}
    />
  );
}
