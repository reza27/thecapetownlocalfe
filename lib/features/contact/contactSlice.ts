import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBookingRequest } from "../../../types/IBookingRequest";
import TCTLApi from "../../../api/TCTLApi";
import TCTLService from "../../../api/services/TCTLService";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    bookingRequestSubmitted: false,
    bookingRequestIsSubmitting: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postBookingRequest.pending, (state) => {
        state.bookingRequestIsSubmitting = true;
      })
      .addCase(postBookingRequest.fulfilled, (state, action) => {
        state.bookingRequestSubmitted = !!action.payload;
        state.bookingRequestIsSubmitting = false;
      });
  },
});

export const postBookingRequest = createAsyncThunk(
  "contact/postBookingRequest",
  async (data: IBookingRequest) => {
    const tCTLService = new TCTLService(TCTLApi);
    await tCTLService.PostBookingRequestForm(data);
    return true;
  }
);

export const {} = contactSlice.actions;

export default contactSlice.reducer;
