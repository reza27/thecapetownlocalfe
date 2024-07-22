import { createSlice } from "@reduxjs/toolkit";

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
  },
  reducers: {
    setTransportNeeded: (state, action) => {
      state.isTransportNeeded = action.payload;
      console.log("redux transport", action.payload);
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
      console.log("redux can submit", action.payload);
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
});

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
