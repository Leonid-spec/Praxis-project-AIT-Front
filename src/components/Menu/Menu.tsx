import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.css';

const Menu = () => {
  return (
    <div className="menu">
      {/* Логотип */}
      <div className="menu-logo" aria-label="Logo">
        <NavLink to="/" title="Zur Startseite">Logo</NavLink>
      </div>

      {/* Навигационная панель */}
      <div className="menu-nav" aria-label="Navigationsleiste">
        <NavLink to="/service" className="menu-link" title="Unsere Dienstleistungen">Leistungen</NavLink>
        <NavLink to="/team" className="menu-link" title="Unser Team">Team</NavLink>
        <NavLink to="/about" className="menu-link" title="Über die Klinik">Über uns</NavLink>
        <NavLink to="/contact" className="menu-link" title="Unsere Kontaktinformationen">Kontakte</NavLink>
      </div>

      {/* Языковая панель и администратор */}
      <div className="menu-actions" aria-label="Sprach- und Adminbereich">
        {/* Языковая панель */}
        <div className="menu-languages">
          <a href="#" className="menu-lang" title="Deutsche Sprache">DE</a>
          <span>|</span>
          <a href="#" className="menu-lang" title="English Language">EN</a>
          <span>|</span>
          <a href="#" className="menu-lang" title="Russische Sprache">RU</a>
        </div>

        {/* Иконка администратора */}
        <div className="menu-admin">
          <NavLink to="/admin" className="menu-admin-link" title="Admin-Bereich">
            <img src="/path-to-admin-icon.png" alt="Admin Icon" className="menu-admin-icon" />
            Admin
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Menu;
