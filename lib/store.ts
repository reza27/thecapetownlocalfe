import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./features/contact/contactSlice";
import toursSlice from "./features/tours/toursSlice";

import indemnitySlice from "./features/indemnity/indemnitySlice";
import { RTKApi } from "../api/services/RTKService";
import navigationSlice from "./features/navigation/navigationSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      contact: contactSlice,
      indemnity: indemnitySlice,
      tours: toursSlice,
      navigation: navigationSlice,
      [RTKApi.reducerPath]: RTKApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(RTKApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
