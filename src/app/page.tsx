'use client'
import dynamic from 'next/dynamic';
import {
  ConnectKitProvider,
  getDefaultConfig,
  ConnectKitButton
} from 'connectkit'

import { WagmiConfig, createConfig } from 'wagmi'
import { polygon } from 'wagmi/chains'
import styles from './page.module.css'
import Layout from '../components/molecules/Layout';
import config from '../../config';
import '@oceanprotocol/uploader-ui-lib/dist/index.es.css';
const UploaderConnection = dynamic(() => import('@oceanprotocol/uploader-ui-lib').then((module) => module.UploaderConnection), { ssr: false });

export default function Home() {

  const wagmiConfig = createConfig(
    getDefaultConfig({
      appName: 'Ocean Uploader UI',
      infuraId: process.env.INFURA_ID || '',
      chains: [polygon],
      walletConnectProjectId: process.env.WALLET_CONNECT_PROJECT_ID || ''
    })
  )

  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectKitProvider>
        <Layout>
          <div className={styles.root}>
            <h1 className={styles.title}>Ocean Uploader</h1>
            <p className={styles.description}>
              A TypeScript library for interacting with the Ocean Uploader API.
              It provides a simple interface to call the API endpoints in Ocean
              uploader for managing file storage uploads, quotes, and more.
            </p>
            <div className={styles.whale} />
            <div className={styles.squid} />
            <div className={styles.uploader}>
              <UploaderConnection
                uploader_url={
                  process.env.UPLOADER_URL ||
                  'https://api.uploader.oceanprotocol.com/'
                }
                uploader_account={
                  process.env.UPLOADER_ACCOUNT ||
                  '0x5F8396D1BfDa5259Ee89196F892E4401BF3B596d'
                }
              />
            </div>
          </div>
        </Layout>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
