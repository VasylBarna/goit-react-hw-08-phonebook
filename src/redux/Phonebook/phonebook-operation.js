import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('autorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: (name, number) => ({
        url: '/contacts',
        method: 'POST',
        body: name,
        number,
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contact/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactApi;
