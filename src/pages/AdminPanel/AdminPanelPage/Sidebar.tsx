import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./sideBar.module.css";

const navItems = [
  {
    path: "/admin-panel/settings",
    label: "Settings",
    // icon: "https://static.vecteezy.com/system/resources/previews/031/716/638/non_2x/transparent-background-settings-icon-png.png"
    icon: "https://cdn3.iconfinder.com/data/icons/smarthome-30/24/Customize_Home-1024.png"
  },
  {
    path: "/admin-panel/appointments",
    label: "Appointment",
    icon: "https://cdn-icons-png.flaticon.com/512/10279/10279235.png"
    // https://png.pngtree.com/png-vector/20230825/ourmid/pngtree-vector-flat-line-silhouette-human-form-with-an-appointment-icon-on-png-image_6941000.png
  },
  {
    path: "/admin-panel/admin-services",
    label: "Service",
    icon: "https://png.pngtree.com/png-clipart/20230330/original/pngtree-management-services-line-icon-png-image_9009405.png"
  },
  {
    path: "/admin-panel/doctors",
    label: "Doctors",
    icon: "https://png.pngtree.com/png-clipart/20230405/original/pngtree-dentist-line-icon-png-image_9028987.png"
  }
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