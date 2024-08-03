import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBookingRequest } from "../../../types/IBookingRequest";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    bookingRequestSubmitted: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postBookingRequest.pending, (state) => {
        console.log("loading...");
      })
      .addCase(postBookingRequest.fulfilled, (state, action) => {
        state.bookingRequestSubmitted = !!action.payload;
      });
  },
});

export const postBookingRequest = createAsyncThunk(
  "contact/postBookingRequest",
  async (data: IBookingRequest) => {
    const JSONdata = JSON.stringify(data);

    const endpoint = process.env.NEXT_PUBLIC_APP_ENV
      ? process.env.NEXT_PUBLIC_LOCAL_URL + "/api/mail"
      : process.env.NEXT_PUBLIC_PROD_URL + "/api/mail";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    return true;
  }
);

// Action creators are generated for each case reducer function
export const {} = contactSlice.actions;

export default contactSlice.reducer;
