import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import bookingReducer from "./bookingSlice";

const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
