import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import PageNotFound from "../pages/404/PageNotFound";
import HomePage from "./../view/Home/Home";
import EventPage from "./../view/Event/EventPage/Event";
import ContactPage from "./../view/Contact/Contact";
import PaymentPage from "./../view/Payment/Payment";
import EventDetailPage from "./../view/Event/EventDetail/EventDetail";
import SuccessPage from "./../view/PaymentSuccess/SuccessPage/Success";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="event" element={<EventPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="payment" element={<PaymentPage />} />
      <Route path="event/:id" element={<EventDetailPage />} />
      <Route path="success/:paymentId" element={<SuccessPage />} />
      {/* <Route path="/*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export default Routers;
