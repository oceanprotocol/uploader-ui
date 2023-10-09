'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { DBSUploader } from '@oceanprotocol/dbs-ui-lib';
import '@oceanprotocol/dbs-ui-lib/dist/index.esm.css';
import Layout from '../components/molecules/Layout';
import config from '../../config';

export default function Home() {
  return (
    <Layout>
      <DBSUploader
        dbs_url={config.DBS_URL}
        dbs_account={config.DBS_ACCOUNT}
        infuraId={config.INFURA_ID}
        walletConnectProjectId={config.WALLET_CONNECT_PROJECT_ID}
      />

      <div className={styles.center}>
        <a
          href={config.githubRepo}
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
    </Layout>
  );
}
