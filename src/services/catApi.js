import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thecatapi.com/v1/' }),
  endpoints: (builder) => ({
    getCatByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getByLimit: builder.query({
        query: (limit = 10) => `images/search?limit=${limit}`
    }),
  }),
})


export const { useGetByLimitQuery } = catApi