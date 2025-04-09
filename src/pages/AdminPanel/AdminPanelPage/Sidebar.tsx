import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./sidebar.module.css";

const navItems = [
  {
    path: "/admin-panel/settings",
    label: "Settings",
    icon: "https://static.vecteezy.com/system/resources/previews/031/716/638/non_2x/transparent-background-settings-icon-png.png"
  },
  {
    path: "/admin-panel/appointments",
    label: "Appointment",
    icon: "https://www.vhv.rs/dpng/f/274-2749469_appointment-icon-png.png"
  },
  {
    path: "/admin-panel/admin-services",
    label: "Service",
    icon: "https://png.pngtree.com/png-clipart/20230330/original/pngtree-management-services-line-icon-png-image_9009405.png"
  },
  {
    path: "/admin-panel/doctors",
    label: "Doctors",
    icon: "https://th.bing.com/th/id/R.f6c7c7a2dcddf4dc8bbfd7e3bd0b7c00?rik=LYm39AE86bkYgw&pid=ImgRaw&r=0"
  },
  {
    path: "/admin-panel/images",
    label: "Images",
    icon: "https://th.bing.com/th/id/R.b2242d32dc5434a7a2144b2dff9ccb11?rik=Doe5MOtFkP7fpQ&riu=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fpraveen%2Fminimal-outline%2F512%2Fgallery-icon.png&ehk=ufGGEm8Yn5y27iyvTpd%2FZC8yizpZMoKJf%2B2mMJoK0%2FU%3D&risl=&pid=ImgRaw&r=0"
  },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = useMemo(() => location.pathname, [location.pathname]);

  return (
    <div className={styles.sidebar}>
      {navItems.map(({ path, label, icon }) => (
        <div key={path} className={`${styles.item} ${activePath === path ? styles.active : ""}`}>
          <div onClick={() => navigate(path)} className={styles.box}>
            <img src={icon} alt={label} className={styles.icon} />
            <div className={styles.labelTop}>{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;