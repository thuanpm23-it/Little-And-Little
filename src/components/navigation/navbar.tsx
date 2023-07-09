import React from "react";
import logo from "/selfLearning/InternReact/little-little/src/images/logo.png";
import icon from "/selfLearning/InternReact/little-little/src/images/icon.png";
// import "/selfLearning/InternReact/little-little/src/styles/navbar.css";
import "../navigation/navbar.css";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="box">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul>
        <li>
          <NavLink to="/home" className="header-top ">
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="header-top">
            Sự kiện
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="header-top">
            Liên hệ
          </NavLink>
        </li>
        <li>
          <div className="header-wrapper">
            <i className="header-icon">
              <img src={icon} alt="icon" />
            </i>
            <NavLink to="/" className="header-top">
              0123456789
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
