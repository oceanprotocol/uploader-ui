'use client'
import dynamic from 'next/dynamic';
import {
  ConnectKitProvider,
  getDefaultConfig
} from 'connectkit'

import { WagmiConfig, createConfig } from 'wagmi'
import { polygon } from 'wagmi/chains'
import styles from './page.module.css'
import Layout from '../components/molecules/Layout';
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
      <ConnectKitProvider theme='minimal'>
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
                  process.env.NEXT_PUBLIC_UPLOADER_URL ||
                  'https://api.uploader.oceanprotocol.com/'
                }
                uploader_account={
                  process.env.NEXT_PUBLIC_UPLOADER_ACCOUNT ||
                  '0x21F2B4d705aC448c9Ff96694Dd9e5901F79f1Ab2'
                }
              />
            </div>
          </div>
        </Layout>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
