// import { Button } from '@chakra-ui/react';
import Button from '../../atoms/Button';
import { useWeb3 } from '../../../context/Web3Context';
import { magic } from '../../../utils/magic';

import styles from './style.module.css';

const ConnectButton = () => {
  // Get the initializeWeb3 function from the Web3 context
  const { initializeWeb3 } = useWeb3();

  // Define the event handler for the button click
  const handleConnect = async () => {
    try {
      // Try to connect to the wallet using Magic's user interface
      // @ts-ignore
      await magic.wallet.connectWithUI();

      // If connection to the wallet was successful, initialize new Web3 instance
      initializeWeb3();
    } catch (error) {
      // Log any errors that occur during the connection process
      console.error('handleConnect:', error);
    }
  };

  // Render the button component with the click event handler
  return (
    <Button className={styles.button} style="ghost" onClick={handleConnect}>
      Connect wallet
    </Button>
  );
};

export default ConnectButton;
