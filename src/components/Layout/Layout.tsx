import { ReactNode } from 'react'

import Menu from "../Menu/Menu";
interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout = ({ children }: LayoutProps) => {
    return (
      <div>
        <Menu />
        {children}
      </div>
    );
  };
  
  export default Layout;