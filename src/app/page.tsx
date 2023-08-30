'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { DBSUploader } from '@oceanprotocol/dbs-ui-lib';
import '@oceanprotocol/dbs-ui-lib/dist/index.esm.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/ocean-logo.svg"
          alt="Ocean Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <DBSUploader 
        dbs_url={process.env.DBS_URL || 'https://dbs.oceanprotocol.com'}
        dbs_account={process.env.DBS_ACCOUNT || '0x5F8396D1BfDa5259Ee89196F892E4401BF3B596d'}
        infuraId={process.env.INFURA_ID || ''}
        walletConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID || ''}
      />

      <div className={styles.center}>
        <a
          href="https://github.com/oceanprotocol/dbs-ui-lib"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            src="/github-mark.svg"
            alt="Github Logo"
            width={50}
            height={37}
            priority
          />
        </a>
      </div>
    </main>
  )
}
