import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IGoogleReviewObject,
  IGoogleReviewError,
} from "../../types/IGoogleReview";

// Define a service using a base URL and expected endpoints
export const RTKApi = createApi({
  reducerPath: "TCTLApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_ENV
      ? process.env.NEXT_PUBLIC_LOCAL_URL
      : process.env.NEXT_PUBLIC_PROD_URL,
  }),
  endpoints: (builder) => ({
    getReviews: builder.query<IGoogleReviewObject | IGoogleReviewError, void>({
      query: () => `/api/reviews/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetReviewsQuery } = RTKApi;
