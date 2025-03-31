import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniFooter from "../../pages/Contacts/MiniFooter";
import styles from "./layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  // Страницы с мини-футером
  const miniFooterPages = ["/contacts", "/another-page"];
  const isMiniFooter = miniFooterPages.includes(location.pathname);

  // Страницы без футера вообще
  const noFooterPages = ["/admin-panel", "/admin-panel/doctors", "/admin-panel/calendar", "/admin-panel/services"];
  const hideFooter = noFooterPages.some((path) => location.pathname.startsWith(path));

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>{children}</main>
      {!hideFooter && (isMiniFooter ? <MiniFooter /> : <Footer />)}
    </div>
  );
};

export default Layout;