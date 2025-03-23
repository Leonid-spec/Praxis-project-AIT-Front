import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
// const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isAdminPanel = location.pathname.startsWith("/admin-panel");
  console.log("Layout is rendering");
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
