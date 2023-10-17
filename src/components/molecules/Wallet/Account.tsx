import React, { ReactElement } from 'react';
import Caret from '../../../assets/caret.svg';
import styles from './Account.module.css';
import Image from 'next/image';
import { truncateWalletAddress } from '../../../utils/truncateAddress';
import ConnectButton from '../WalletInteraction/ConnectButton';
import { useWeb3 } from '../../../context/Web3Context';

type AccountPropType = {
  mobile?: boolean;
};

// Forward ref for Tippy.js
// eslint-disable-next-line
export default function Account({ mobile }: AccountPropType): ReactElement {
  const { walletAddress, isUserConnected } = useWeb3();

  return isUserConnected ? (
    <button
      className={styles.button}
      aria-label="Account"
      onClick={(e) => e.preventDefault()}
    >
      <span className={styles.address} title={walletAddress}>
        {truncateWalletAddress(walletAddress, 4)}
      </span>
      <Image
        src={Caret}
        alt="caret"
        className={styles.caret}
        aria-hidden="true"
      />
    </button>
  ) : (
    <ConnectButton />
  );
}
