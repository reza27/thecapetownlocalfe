import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBookingRequest } from "../../../types/IBookingRequest";
import TCTLApi from "../../../api/TCTLApi";
import TCTLService from "../../../api/services/TCTLService";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    currentPage: "",
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      console.log("state.currentPage", state.currentPage);
    },
  },
});

export const { setCurrentPage } = navigationSlice.actions;

export default navigationSlice.reducer;
