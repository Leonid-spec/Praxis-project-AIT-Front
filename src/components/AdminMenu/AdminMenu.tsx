import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoginAdminForm from "../Login/LoginAdminForm";
import { FaKey, FaSignOutAlt, FaTools } from "react-icons/fa";
import {
  AdminMenuWrapper,
  AdminIconWrapper,
  AdminIcon,
  Dropdown,
  DropdownItem,
} from "./styles";

interface AdminMenuProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const AdminMenu: React.FC<AdminMenuProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AdminMenuWrapper>
      <AdminIconWrapper
        onClick={() => {
          if (isLoggedIn) {
            setShowDropdown(!showDropdown);
          } else {
            setShowLoginForm(true);
          }
        }}
      >
        <AdminIcon
          src="https://th.bing.com/th/id/R.fbf39144bff5c02898fdc8fd583f84b6?rik=qLhp7D3LhK%2fQgA&pid=ImgRaw&r=0"
          alt="Admin"
        />
      </AdminIconWrapper>

      {isLoggedIn && showDropdown && (
        <Dropdown ref={dropdownRef}>
          <DropdownItem onClick={() => navigate("/admin-panel/settings")}>
            <FaTools style={{ marginRight: "8px" }} /> Admin panel
          </DropdownItem>

          {/* <DropdownItem onClick={() => navigate("/admin-panel/settings")}>
            <FaKey style={{ marginRight: "8px" }} /> Change password
          </DropdownItem>

          <DropdownItem onClick={() => navigate("/admin-panel/settings")}>
            <FaTools style={{ marginRight: "8px" }} /> Create New Admin
          </DropdownItem> */}

          <DropdownItem onClick={handleLogout}>
            <FaSignOutAlt style={{ marginRight: "8px" }} /> Log out
          </DropdownItem>
        </Dropdown>
      )}

      {showLoginForm && (
        <LoginAdminForm
          onClose={() => setShowLoginForm(false)}
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setShowLoginForm(false);
            navigate("/admin-panel");
          }}
        />
      )}
    </AdminMenuWrapper>
  );
};

export default AdminMenu;
