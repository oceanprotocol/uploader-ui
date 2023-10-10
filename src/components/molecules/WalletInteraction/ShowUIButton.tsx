import cs from 'classnames';
import styles from './style.module.css';
import Button from '../../atoms/Button';
import { useWeb3 } from '../../../context/Web3Context';

const ShowUIButton = ({ classNames }: { classNames?: string }) => {
  const { isUserConnected, manageWallet } = useWeb3();

  return isUserConnected ? (
    <Button
      className={cs(styles.button, `${classNames}`)}
      style="ghost"
      onClick={manageWallet}
    >
      Wallet Details
    </Button>
  ) : null;
};

export default ShowUIButton;
