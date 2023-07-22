import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, doc, collection, getDoc } from "firebase/firestore";
import app from "../../../config/firebase";

export const fetchEventDetail = createAsyncThunk(
  "eventdetail/fetchEventDetail",
  async (eventId: string) => {
    const db = getFirestore(app);
    const eventsCollectionRef = collection(db, "events");
    const eventRef = doc(eventsCollectionRef, eventId);
    const eventSnapshot = await getDoc(eventRef);
    if (eventSnapshot.exists()) {
      return eventSnapshot.data();
    }
    return null;
  }
);

interface EventDetailState {
  event: any;
  loading: boolean;
}

const initialState: EventDetailState = {
  event: null,
  loading: false,
};

const eventDetailSlice = createSlice({
  name: "eventdetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEventDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEventDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.event = action.payload;
    });
  },
});

export default eventDetailSlice.reducer;
