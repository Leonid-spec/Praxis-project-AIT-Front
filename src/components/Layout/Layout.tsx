import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const isAdminPanel = location.pathname.startsWith("/admin-panel");

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        {children}
      </main>
      {!isAdminPanel && (
        <div className={styles.footer}>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
