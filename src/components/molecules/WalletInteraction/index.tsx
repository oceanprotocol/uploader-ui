import { useWeb3 } from '../../../context/Web3Context';
import style from './style.module.css';
import ConnectButton from './ConnectButton';
import DisconnectButton from './DisconnectButton';
import ShowUIButton from './ShowUIButton';

export default function WalletInteraction() {
  const { isUserConnected } = useWeb3();

  return (
    <>
      {!isUserConnected ? (
        <ConnectButton />
      ) : (
        <div className={style.root}>
          <ShowUIButton />
          <DisconnectButton />
        </div>
      )}
    </>
  );
}
