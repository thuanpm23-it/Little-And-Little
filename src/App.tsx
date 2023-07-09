import React from "react";
import NavBar from "./components/navigation/navbar";
import HomePage from "./pages/home/home";
// import ContactPage from "./pages/contact/contact";
import "./App.css";
import Routers from "./routers/Router";

function App() {
  return (
    <div className="wrapper">
      <div className="navbar-wrapper">
        <NavBar />
      </div>
      <Routers />
    </div>
  );
}

export default App;
