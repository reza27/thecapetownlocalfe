import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TCTLApi from "../../../api/TCTLApi";
import TCTLService from "../../../api/services/TCTLService";
import { IIndemnityForm } from "../../../types/IIndemnityForm";

export const indemnitySlice = createSlice({
  name: "indemnity",
  initialState: {
    indemnityFormSubmitted: false,
    indemnityFormIsSubmitting: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postIndemnityForm.pending, (state) => {
        state.indemnityFormIsSubmitting = true;
      })
      .addCase(postIndemnityForm.fulfilled, (state, action) => {
        state.indemnityFormSubmitted = !!action.payload;
        state.indemnityFormIsSubmitting = false;
      });
  },
});

export const postIndemnityForm = createAsyncThunk(
  "indemnity/postIndemnityForm",
  async (data: IIndemnityForm) => {
    const tCTLService = new TCTLService(TCTLApi);
    await tCTLService.PostIndemnityForm(data);
    return true;
  }
);

export const {} = indemnitySlice.actions;

export default indemnitySlice.reducer;
