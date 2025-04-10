import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const healthApi = createApi({
  reducerPath: 'healthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
  }),
  endpoints: (builder) => ({
    checkServerIsWork: builder.query<{message: string}, void>({
      query: () => '',
    }),
  }),
})

export const { useCheckServerIsWorkQuery } = healthApi