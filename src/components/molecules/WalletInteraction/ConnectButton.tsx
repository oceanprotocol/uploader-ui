// import { Button } from '@chakra-ui/react';
import Button from '../../atoms/Button';
import { useWeb3 } from '../../../context/Web3Context';

import styles from './style.module.css';

const ConnectButton = () => {
  const { onConnect } = useWeb3();

  return (
    <Button className={styles.button} style="ghost" onClick={onConnect}>
      Connect wallet
    </Button>
  );
};

export default ConnectButton;
