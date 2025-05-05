import { baseQueryWithRefresh } from '@/shared/libs/baseQueryWithRefreshю'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const healthApi = createApi({
  reducerPath: 'healthApi',
  baseQuery: baseQueryWithRefresh,
  endpoints: (builder) => ({
    checkServerIsWork: builder.query<{message: string}, void>({
      query: () => ({
        url: '',
      }),
    }),
  }),
})

export const { useCheckServerIsWorkQuery } = healthApi