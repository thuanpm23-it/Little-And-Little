import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
  packageType: string;
  quantity: number;
  date: Date;
  fullName: string;
  email: string;
  phone: string;
}

const initialState: BookingState = {
  packageType: "",
  quantity: 0,
  date: new Date(),
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
    updateQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    updateDate: (state, action: PayloadAction<Date>) => {
      state.date = action.payload;
    },
    updateFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updatePhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
  },
});

export const {
  setBookingDetails,
  updateQuantity,
  updateDate,
  updateFullName,
  updateEmail,
  updatePhone,
} = bookingSlice.actions;

export default bookingSlice.reducer;
