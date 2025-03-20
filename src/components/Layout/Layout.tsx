import { ReactNode } from 'react';
import Menu from "../Menu/Menu";
import Footer from '../Footer/Footer';
import styles from './layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <main className={styles.content}>
        {children}
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
