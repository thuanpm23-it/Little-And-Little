import React from "react";
import "../../layout/Navbar/navbar.css";
import { NavLink } from "react-router-dom";
import { images } from "../../assets/images/images";

const NavBar: React.FC = () => {
  return (
    <div className="header-box">
      <div className="logo">
        <img src={images[19].navbarLogo} alt="Logo" />
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
          <img src={images[20].navbarIcon} alt="icon" />
        </i>
        <i className="header-nav">0123456789</i>
      </div>
    </div>
  );
};

export default NavBar;
