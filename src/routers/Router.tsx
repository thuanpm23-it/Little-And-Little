import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home/home";
import ContactPage from "../pages/contact/contact";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} />
      {/* <Route path="/su-kien" element={E} /> */}
      <Route path="contact" element={<ContactPage />} />
    </Routes>
  );
};

export default Routers;
