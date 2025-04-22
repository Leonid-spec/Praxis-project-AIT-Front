import { ReactNode } from "react";
// import { useLocation } from "react-router-dom";
import Header from "../Header/Header"; // Правильный путь к компоненту Header
// import ResponsiveFooter from "../Footer/ResponsiveFooter"; // Правильный путь к компоненту ResponsiveFooter
import styles from "./layout.module.css";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // const location = useLocation();

  // Страницы без футера вообще
  // const noFooterPages = ["/admin-panel", "/admin-panel/doctors", "/panel/appointments", "/admin-panel/services"];
  // const hideFooter = noFooterPages.some((path) => location.pathname.startsWith(path)); 

  return (
    <div className={styles.layout}>
      <div className={styles.globalContainer}>
       {/* Шапка сайта */}
      <Header />

       {/* Основное содержимое */}
      <main className={styles.content}>{children}</main>
      
      {/* Условное отображение футера */}
      {/* {!hideFooter && <ResponsiveFooter />} */}
      <Footer />
    </div>
    </div>
  );
};

export default Layout;
