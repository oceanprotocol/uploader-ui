'use client'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import {
  ConnectKitProvider,
  getDefaultConfig,
  ConnectKitButton
} from 'connectkit'

import { WagmiConfig, createConfig } from 'wagmi'
import { polygon } from 'wagmi/chains'
import styles from './page.module.css'
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
          <br />

          <ConnectKitButton />

          <div className={styles.center}>
            <UploaderConnection
              uploader_url={process.env.UPLOADER_URL || 'https://api.uploader.oceanprotocol.com/'}
              uploader_account={process.env.UPLOADER_ACCOUNT || '0x5F8396D1BfDa5259Ee89196F892E4401BF3B596d'}
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
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
