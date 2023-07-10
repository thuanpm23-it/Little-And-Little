import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home/home";
import ContactPage from "../pages/contact/contact";
import EventPage from "../pages/event/event";
import PaymentPage from "../pages/payment/payment";
import EventDetailPage from "../pages/eventdetail/eventdetail";
import PaySuccess from "../pages/paysuccess/paysuccess";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="event" element={<EventPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="payment" element={<PaymentPage />} />
      <Route path="event/:id" element={<EventDetailPage />} />
      <Route path="success" element={<PaySuccess />} />
    </Routes>
  );
};

export default Routers;
