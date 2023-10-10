import React, { ReactElement } from 'react';
import Image from 'next/image';
import cs from 'classnames';
import styles from './Details.module.css';
import MetamaskLogo from '../../../assets/MetaMask_Fox.svg';
import MagicLinkLogo from '../../../assets/magic-link.svg';
import CoinbaseLogo from '../../../assets/coinbase-wallet-logo.svg';
import { useWeb3 } from '../../../context/Web3Context';
import ShowUIButton from '../WalletInteraction/ShowUIButton';
import DisconnectButton from '../WalletInteraction/DisconnectButton';

export default function Details(): ReactElement {
  const {
    walletConnectionType,
    oceanTokenBalanceFormatted,
    networkTokenBalanceFormatted,
  } = useWeb3();

  return (
    <div className={styles.details}>
      <ul>
        <li className={styles.balance}>
          <span className={styles.symbol}>MATIC</span>
          <span className={styles.value}>
            <b>{networkTokenBalanceFormatted}</b>
          </span>
        </li>
        <li className={styles.balance}>
          <span className={styles.symbol}>OCEAN</span>
          <span className={styles.value}>
            <b>{oceanTokenBalanceFormatted}</b>
          </span>
        </li>
        <li
          className={cs(
            styles.actions,
            walletConnectionType?.walletType !== 'magic' &&
              styles.walletInfoCenter
          )}
        >
          <div title="Connected provider" className={styles.walletInfo}>
            <span className={styles.walletLogoWrap}>
              {walletConnectionType?.walletType === 'metamask' && (
                <Image
                  className={styles.walletLogo}
                  src={MetamaskLogo}
                  alt="metamask logog"
                />
              )}
              {walletConnectionType?.walletType === 'magic' && (
                <Image
                  className={styles.walletLogo}
                  src={MagicLinkLogo}
                  alt="metamask logog"
                />
              )}
              {walletConnectionType?.walletType === 'coinbase_wallet' && (
                <Image
                  className={styles.walletLogo}
                  src={CoinbaseLogo}
                  alt="metamask logog"
                />
              )}
              {walletConnectionType?.walletType}
            </span>
          </div>
          <div className={styles.row}>
            {walletConnectionType?.walletType === 'magic' && (
              <ShowUIButton classNames={styles.w100} />
            )}
            <DisconnectButton />
          </div>
        </li>
      </ul>
    </div>
  );
}
