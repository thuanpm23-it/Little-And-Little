import React from "react";
import logo from "/selfLearning/InternReact/little-little/src/images/logo.png";
import icon from "/selfLearning/InternReact/little-little/src/images/icon.png";
// import "/selfLearning/InternReact/little-little/src/styles/navbar.css";
import "../navigation/navbar.css";

const NavBar: React.FC = () => {
  return (
    <div className="box">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul>
        <li>
          <a href="#" className="header-top">
            Trang chủ
          </a>
        </li>
        <li>
          <a href="#">Sự kiện</a>
        </li>
        <li>
          <a href="#">Liên hệ</a>
        </li>
        <li>
          <div className="header-wrapper">
            <i className="header-icon">
              <img src={icon} alt="icon" />
            </i>
            <a href="#" className="header-bottom">
              01239456789
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
