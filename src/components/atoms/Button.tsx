import React, { ReactNode, FormEvent } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.css';
import Link from 'next/link';

const cx = classNames.bind(styles);

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: FormEvent) => void;
  disabled?: boolean;
  to?: string;
  name?: string;
  size?: 'small' | '';
  font14?: 'font14' | '';
  style?: 'primary' | 'secondary' | 'ghost' | 'text';
  type?: 'submit';
  download?: boolean;
  target?: string;
}

export default function Button({
  href,
  children,
  className,
  to,
  size,
  style,
  font14,
  ...props
}: ButtonProps) {
  const styleClasses = cx({
    button: true,
    primary: style === 'primary',
    secondary: style === 'secondary',
    ghost: style === 'ghost',
    text: style === 'text',
    small: size === 'small',
    font14: font14 === 'font14',
    [className as string]: className,
  });

  return to ? (
    <Link href={to} className={styleClasses} {...props}>
      {children}
    </Link>
  ) : href ? (
    <a href={href} className={styleClasses} {...props}>
      {children}
    </a>
  ) : (
    <button className={styleClasses} {...props}>
      {children}
    </button>
  );
}
