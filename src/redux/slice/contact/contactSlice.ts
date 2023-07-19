import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../../../config/firebase";

export const sendContactForm = createAsyncThunk(
  "contact/sendContactForm",
  async (contactData: ContactData) => {
    try {
      const db = getFirestore(app);
      const contactFormCollectionRef = collection(db, "contacts");
      const docRef = await addDoc(contactFormCollectionRef, contactData);
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  }
);

interface ContactData {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  message: string;
}

const contactSlice = createSlice({
  name: "contact",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendContactForm.fulfilled, () => {});
  },
});

export default contactSlice.reducer;
