import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
  packageType: string;
  quantity: number;
  date: string;
  fullName: string;
  email: string;
  phone: string;
}

const initialState: BookingState = {
  packageType: "",
  quantity: 0,
  date: "",
  fullName: "",
  email: "",
  phone: "",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingDetails: (state, action: PayloadAction<BookingState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setBookingDetails } = bookingSlice.actions;

export default bookingSlice.reducer;
