// import { Button } from '@chakra-ui/react';
import { useWeb3 } from '../../../context/Web3Context';
import Button from '../../atoms/Button';
import styles from './style.module.css';

const DisconnectButton = () => {
  const { onDisconnect } = useWeb3();

  return (
    <Button className={styles.button} style="ghost" onClick={onDisconnect}>
      Disconnect
    </Button>
  );
};

export default DisconnectButton;
