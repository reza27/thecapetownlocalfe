import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./features/contact/contactSlice";
import indemnitySlice from "./features/contact/indemnitySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      contact: contactSlice,
      indemnity: indemnitySlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
