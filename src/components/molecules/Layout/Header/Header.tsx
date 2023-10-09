import Link from 'next/link';

import style from './Header.module.css';
import Logo from '../../../atoms/Logo';
import Button from '../../../atoms/Button';
import ConnectButton from '../../WalletInteraction/ConnectButton';

export default function Header() {
  return (
    <div className={style.root}>
      <div className={style.menu}>
        <Link href="/" className={style.logo} title="Back to Homepage">
          <Logo />
        </Link>
        <ConnectButton />
      </div>
    </div>
  );
}
