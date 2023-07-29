import React from "react";
import { images } from "../../assets/images/images";
import { NavLink } from "react-router-dom";
import "../navbar/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg__nav">
        <div className="container">
          <div className="row py-3 ">
            <div className="col ms-4">
              <img src={images[19].navbarLogo} alt="" />
            </div>
            <div className="col navbar-expand d-flex justify-content-center align-items-center nav__ds">
              <ul className="navbar-nav navbar__custom">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    Trang chủ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/event">
                    Sự kiện
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Liên hệ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <img src={images[20].navbarIcon} alt="" />
              <i className="ms-1 nav__ds">01290423423</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
