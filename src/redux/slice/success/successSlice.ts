import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFirestore,
  collection,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import app from "../../../config/firebase";

export const fetchTickets = createAsyncThunk(
  "success/fetchTickets",
  async (paymentId: string) => {
    try {
      const db = getFirestore(app);
      const ticketsRef = collection(db, "tickets");
      const q = query(ticketsRef, where("paymentId", "==", paymentId));
      const snapshot = await getDocs(q);
      const ticketData = snapshot.docs.map((doc) => doc.data());
      return ticketData;
    } catch (error) {
      console.error("Error fetching tickets: ", error);
      throw error;
    }
  }
);

interface SuccessState {
  tickets: any[];
}

const initialState: SuccessState = {
  tickets: [],
};

const successSlice = createSlice({
  name: "success",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.tickets = action.payload;
    });
  },
});

export default successSlice.reducer;
