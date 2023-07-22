import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import app from "../../../config/firebase";

interface Bank {
  id: string;
  cardName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

interface BanksState {
  banks: Bank[];
  loading: boolean;
}

const initialState: BanksState = {
  banks: [],
  loading: false,
};

export const fetchBanks = createAsyncThunk("banks/fetchBanks", async () => {
  const db = getFirestore(app);
  const banksRef = collection(db, "banks");
  const snapshot = await getDocs(banksRef);
  const bankData = snapshot.docs.map((doc) => doc.data()) as Bank[];
  return bankData;
});

const banksSlice = createSlice({
  name: "banks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBanks.fulfilled, (state, action) => {
        state.loading = false;
        state.banks = action.payload;
      });
  },
});

export default banksSlice.reducer;
