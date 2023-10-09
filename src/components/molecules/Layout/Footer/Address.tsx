import React from 'react';
import Logo from '../../../atoms/Logo';
import styles from './Address.module.css';
import Link from 'next/link';
import useSiteMetadata from './hooks/useSiteMetadata';

export default function Address() {
  const { company } = useSiteMetadata();
  const year = new Date().getFullYear();

  return (
    <div className={styles.address}>
      <div className={styles.addressBox}>
        <Link href="/" className={styles.logo} title="Back to Homepage">
          <Logo />
        </Link>

        <p>
          <strong>{company.name}</strong>
          <br />
          {company.address.location}
          <br />
          {company.address.street}
          <br />
          {company.address.zip} {company.address.city}
        </p>
      </div>

      <div className={styles.copyright}>
        <p>
          <small>
            © {year} {company.name} — All Rights Reserved
          </small>
        </p>
      </div>
    </div>
  );
}
