import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import {
  DocumentData,
  addDoc,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import app from "../config/firebase";

interface BankData {
  id: string;
  cardName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

interface PaymentData {
  packageType: string;
  totalPrice: string;
  quantity: number;
  date: string;
  fullName: string;
  phone: string;
  email: string;
  bankData: BankData;
}

interface PaymentState {
  banks: BankData[];
  loading: boolean;
  error: string | null;
}

const initialState: PaymentState = {
  banks: [],
  loading: false,
  error: null,
};

export const fetchBanks = createAsyncThunk("payment/fetchBanks", async () => {
  try {
    const db = getFirestore(app);
    const banksRef = collection(db, "banks");
    const snapshot = await getDocs(banksRef);
    const bankData = snapshot.docs.map((doc) => doc.data()) as BankData[];
    return bankData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Error fetching banks: " + error.message);
    }
    throw new Error("Unknown error fetching banks");
  }
});

export const addPayment = createAsyncThunk(
  "payment/addPayment",
  async (paymentData: PaymentData) => {
    try {
      const db = getFirestore(app);
      const paymentRef = collection(db, "payments");
      const docRef = await addDoc(paymentRef, paymentData);
      const paymentId = docRef.id;

      return paymentId;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error("Error adding payment: " + error.message);
      }
      throw new Error("Unknown error adding payment");
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBanks.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchBanks.fulfilled, (state, action) => {
      state.banks = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchBanks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
    builder.addCase(addPayment.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addPayment.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(addPayment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
  },
});

export default paymentSlice.reducer;

export const selectBanks = (state: RootState) => state.payment.banks;
export const selectPaymentLoading = (state: RootState) => state.payment.loading;
export const selectPaymentError = (state: RootState) => state.payment.error;
