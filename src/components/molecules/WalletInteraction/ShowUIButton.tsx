import styles from './style.module.css';
import Button from '../../atoms/Button';
import { useWeb3 } from '../../../context/Web3Context';

const ShowUIButton = () => {
  const { isUserConnected, manageWallet } = useWeb3();

  return isUserConnected ? (
    <Button className={styles.button} style="ghost" onClick={manageWallet}>
      Show UI
    </Button>
  ) : null;
};

export default ShowUIButton;
