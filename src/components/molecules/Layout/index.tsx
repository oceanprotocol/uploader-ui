import { Web3Provider } from '../../../context/Web3Context';
import Footer from './Footer';
import Header from './Header/Header';
import styles from './index.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.root}>
      <Header />
        {children}
      <Footer />
    </main>
  );
}
