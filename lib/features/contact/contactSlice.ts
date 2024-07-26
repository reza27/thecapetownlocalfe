import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBookingRequest } from "../../../types/IBookingRequest";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    isTransportNeeded: false,
    isFlexibleDate: true,
    hasEmailError: false,
    hasNameError: false,
    hasSubjectError: false,
    hasPhoneError: false,
    canSubmit: false,
    startDate: new Date(),
    name: "",
    email: "",
    mobile: "",
    subject: "",
    address: "",
    message: "",
    bookingRequestSubmitted: false,
  },
  reducers: {
    setTransportNeeded: (state, action) => {
      state.isTransportNeeded = action.payload;
    },
    setFlexibleDate: (state, action) => {
      state.isFlexibleDate = action.payload;
    },

    setEmailError: (state, action) => {
      state.hasEmailError = action.payload;
    },

    setNameError: (state, action) => {
      state.hasNameError = action.payload;
    },

    setSubjectError: (state, action) => {
      state.hasSubjectError = action.payload;
    },

    setPhoneError: (state, action) => {
      state.hasPhoneError = action.payload;
    },
    setCanSubmit: (state, action) => {
      state.canSubmit = action.payload;
    },

    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },

    setName: (state, action) => {
      state.name = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setMobile: (state, action) => {
      state.mobile = action.payload;
    },

    setSubject: (state, action) => {
      state.subject = action.payload;
    },

    setAddress: (state, action) => {
      state.address = action.payload;
    },

    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postBookingRequest.pending, (state) => {
        console.log("loading...");
      })
      .addCase(postBookingRequest.fulfilled, (state, action) => {
        state.bookingRequestSubmitted = action.payload;
      });
  },
});

export const postBookingRequest = createAsyncThunk(
  "contact/postBookingRequest",
  async (data: IBookingRequest) => {
    const JSONdata = JSON.stringify(data);

    const endpoint = process.env.NEXT_PUBLIC_PROD_URL + "/api/mail";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    console.log("result", result);

    return true;
  }
);

// Action creators are generated for each case reducer function
export const {
  setTransportNeeded,
  setFlexibleDate,
  setEmailError,
  setNameError,
  setSubjectError,
  setPhoneError,
  setCanSubmit,
  setStartDate,
  setName,
  setEmail,
  setMobile,
  setSubject,
  setAddress,
  setMessage,
} = contactSlice.actions;

export default contactSlice.reducer;
