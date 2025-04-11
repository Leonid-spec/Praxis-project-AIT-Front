import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BurgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    font-size: 2rem;
    color: #3b7f83;
    cursor: pointer;
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 100px;
`;

export const MobileNav = styled.nav`
  background-color: #3b7f83;
  border-radius: 12px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  max-width: 300px;
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const MobileNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 1.1rem;
  text-align: center;

  &:hover {
    color: #dffeff;
  }

  &.active {
    color: #a0eef2;
  }
`;