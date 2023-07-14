import React from "react";
import logo from "../../images/logo.png";
import icon from "../../images/icon.png";
import "../../layout/Navbar/navbar.css";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="header-box">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-box">
        <NavLink to="/home" className="header-nav">
          Trang chủ
        </NavLink>
        <NavLink to="/event" className="header-nav">
          Sự kiện
        </NavLink>
        <NavLink to="/contact" className="header-nav">
          Liên hệ
        </NavLink>
      </div>

      <div className="phone-box">
        <i className="phone-icon">
          <img src={icon} alt="icon" />
        </i>
        <i className="header-nav">0123456789</i>
      </div>
    </div>
  );
};

export default NavBar;
