'use client'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import styles from './page.module.css'
import '@oceanprotocol/uploader-ui-lib/dist/index.es.css';
const Uploader = dynamic(() => import('@oceanprotocol/uploader-ui-lib').then((module) => module.Uploader), { ssr: false });

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

      <div className={styles.center}>
        <Uploader
          uploader_url={process.env.UPLOADER_URL || 'https://api.uploader.oceanprotocol.com/'}
          uploader_account={process.env.UPLOADER_ACCOUNT || '0x5F8396D1BfDa5259Ee89196F892E4401BF3B596d'}
          infuraId={process.env.INFURA_ID || ''}
          walletConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID || ''}
        /> 
      </div>

      <div className={styles.center}>
        <a
          href="https://github.com/oceanprotocol/uploader-ui"
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
