import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBookingRequest } from "../../../types/IBookingRequest";
import TCTLApi from "../../../api/TCTLApi";
import TCTLService from "../../../api/services/TCTLService";

export const contactSlice = createSlice({
  name: "navigation",
  initialState: {
    currentPage: "",
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = contactSlice.actions;

export default contactSlice.reducer;
