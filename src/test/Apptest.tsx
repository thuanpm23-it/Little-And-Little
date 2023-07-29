import React from "react";
import Navbar from "./navbar/navbar";
import Routers from "./router";
import "./apptest.css";

function AppTest() {
  return (
    <>
      <div className="bg">
        <div className="nav__box">
          <Navbar />
        </div>
        <div className="bg__main">
          <Routers />
        </div>
      </div>
    </>
  );
}

export default AppTest;
