import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeTest from "./home/HomeTest";

const Routers: React.FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} /> */}
      <Route path="/" element={<HomeTest />} />
      {/* <Route path="event" element={<EventPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="payment" element={<PaymentPage />} />
      <Route path="event/:id" element={<EventDetailPage />} />
      <Route path="success/:paymentId" element={<SuccessPage />} /> */}
    </Routes>
  );
};

export default Routers;
