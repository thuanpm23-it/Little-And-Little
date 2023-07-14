import React from "react";
import "./App.css";
import Routers from "./routers/Router";
import NavBar from "./layout/Navbar/Navbar";

function App() {
  return (
    <div className="wrapper">
      <div>
        <NavBar />
      </div>
      <div className="main">
        <Routers />
      </div>
    </div>
  );
}

export default App;
