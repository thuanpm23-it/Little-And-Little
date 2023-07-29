import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeTest from "./home/HomeTest";
import Contact from "./contact/Contact";
import EventPage from "./event/event/EventPage";
import EventDetail from "./event/eventdetail/EventDetail";
import Payment from "./payment/Payment";
import Success from "./success/Success";

const Routers: React.FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} /> */}
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomeTest />} />
      <Route path="contact" element={<Contact />} />
      <Route path="event" element={<EventPage />} />
      <Route path="event/:id" element={<EventDetail />} />
      <Route path="payment" element={<Payment />} />
      <Route path="success/:paymentId" element={<Success />} />
      {/* <Route path="event" element={<EventPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="payment" element={<PaymentPage />} />
      <Route path="event/:id" element={<EventDetailPage />} />
      <Route path="success/:paymentId" element={<SuccessPage />} /> */}
    </Routes>
  );
};

export default Routers;
