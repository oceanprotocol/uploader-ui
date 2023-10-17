import React, { ReactElement } from 'react';
import Account from './Account';
import styles from './index.module.css';
import { useAccount } from 'wagmi';
import Details from './Details';
import Tooltip from '../../atoms/Tooltip';
import { useWeb3 } from '../../../context/Web3Context';

type WalletPropType = {
  mobile?: boolean;
};

export default function Wallet({ mobile }: WalletPropType): ReactElement {
  const { walletAddress, isUserConnected } = useWeb3();

  return (
    <div
      className={
        (styles.wallet,
        'd-flex flex-row justify-content-center align-items-center w-100 h-100 me-0 me-md-3 order-1 order-md-1')
      }
    >
      <Tooltip
        content={<Details />}
        trigger="click focus"
        disabled={!isUserConnected}
        className="h-100"
      >
        <Account mobile={mobile} />
      </Tooltip>
    </div>
  );
}
