'use client'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import styles from './page.module.css'
import { DBSUploader } from '@oceanprotocol/dbs-ui-lib';
import '@oceanprotocol/dbs-ui-lib/dist/index.esm.css';
import Layout from '../components/molecules/Layout';
import config from '../../config';

export default function Home() {
  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.whale} />
        <div className={styles.squid} />
        <div className={styles.uploader}>
          <DBSUploader
            dbs_url={config.DBS_URL}
            dbs_account={config.DBS_ACCOUNT}
            infuraId={config.INFURA_ID}
            walletConnectProjectId={config.WALLET_CONNECT_PROJECT_ID}
          />
        </div>
      </div>
    </Layout>
  );
}
