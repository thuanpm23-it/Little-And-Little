import React from "react";
import "../home/home.css";
import NavBar from "../../components/navigation/navbar";

const HomePage: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="navbar-wrapper">
        <NavBar />
      </div>

      <div className="home-main"></div>
    </div>
  );
};

export default HomePage;
