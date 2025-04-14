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
  const location = useLocation(); // Получение текущего маршрута

  // Список страниц, где нужно отображать мини-футер
  const miniFooterPages = ["/contacts", "/another-page"];
  const isMiniFooter = miniFooterPages.includes(location.pathname); // Проверка, нужен ли мини-футер

  // Страницы без футера вообще
  const noFooterPages = ["/admin-panel", "/admin-panel/doctors", "/panel/appointments", "/admin-panel/services"];
  const hideFooter = noFooterPages.some((path) => location.pathname.startsWith(path));

  return (
    <div className={styles.layout}>
      {/* Шапка сайта */}
      <Header />

      {/* Основное содержимое */}
      <main className={styles.content}>{children}</main>

      {/* Условное отображение футера */}
      {!hideFooter && (isMiniFooter ? <MiniFooter /> : <Footer />)}
    </div>
  );
};

export default Layout;