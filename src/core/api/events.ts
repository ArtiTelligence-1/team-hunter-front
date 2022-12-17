import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://team-hunter-back-staging.herokuapp.com/',
    baseUrl: 'http://localhost:5086/api/v1/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getEvent: builder.query<Event[], null>({
      query: () => ({
        url: 'events',
      }),
    }),
    getEventById: builder.query<Event, number>({
      query: (eventId) => `Event/getEvent/${eventId}`,
    }),
  }),
});

export const { useGetEventQuery, useLazyGetEventQuery } = eventApi;
