import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFirestore,
  collection,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import app from "../../../config/firebase";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const db = getFirestore(app);
  const eventsRef = collection(db, "events");
  const snapshot = await getDocs(eventsRef);
  return snapshot.docs.map((doc) => doc.data());
});

interface EventState {
  events: DocumentData[];
}

const initialState: EventState = {
  events: [],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.events = action.payload;
    });
  },
});

export default eventsSlice.reducer;
