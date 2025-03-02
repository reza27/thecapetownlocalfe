import { createSlice } from "@reduxjs/toolkit";

export const toursSlice = createSlice({
  name: "tours",
  initialState: {
    disablePageScroll: false,
  },
  reducers: {
    setDisablePageScroll: (state, action) => {
      state.disablePageScroll = action.payload;
    },
  },
});

export const { setDisablePageScroll } = toursSlice.actions;

export default toursSlice.reducer;
