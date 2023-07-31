import React from "react";
import "./App.css";
import Routers from "./routers/Router";
import NavBar from "./layout/Navbar/Navbar";

function App() {
  return (
    <div className="bg">
      <div className="nav__box">
        <NavBar />
      </div>
      <div className="bg__main">
        <Routers />
      </div>
    </div>
  );
}

export default App;
