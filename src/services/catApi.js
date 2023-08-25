import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getCatByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})


export const { getCatByName } = pokemonApi