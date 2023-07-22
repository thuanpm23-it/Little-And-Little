import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import bookingReducer from "./slice/payment/bookingSlice";
import eventsReducer from "./slice/event/eventSlice";
import eventDetailReducer from "./slice/event/eventDetailSlice";
import contactReducer from "./slice/contact/contactSlice";
import successReducer from "./slice/success/successSlice";
import banksReducer from "./slice/payment/banksSlice";

const store = configureStore({
  reducer: {
    booking: bookingReducer,
    events: eventsReducer,
    eventdetail: eventDetailReducer,
    contact: contactReducer,
    success: successReducer,
    banks: banksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
