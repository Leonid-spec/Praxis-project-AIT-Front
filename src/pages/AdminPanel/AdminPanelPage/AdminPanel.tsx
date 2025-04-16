// import React from "react";
// import styles from "./adminPanel.module.css";
// import Sidebar from "./Sidebar";
// import MainContent from "./MainContent";

// const AdminPanel: React.FC = () => {
//   return (
//       <div className={styles.mainPanel}>
//         <Sidebar />
//         <MainContent />
//       </div>
//   );
// };

// export default AdminPanel;

import React from "react";
import styles from "./adminPanel.module.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

interface AdminPanelProps {
  isLoggedIn?: boolean;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <div>Будь ласка, увійдіть у систему</div>; // або редірект на логін
  }

  return (
    <div className={styles.mainPanel}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default AdminPanel;
