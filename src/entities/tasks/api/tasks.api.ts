import { IPageRequest } from '@/entities/general/types/general'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetTasksResponse } from '../types/tasks'

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/tasks`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    getTasks: builder.query<IGetTasksResponse, IPageRequest>({
      query: () => '/',
    }),
  }),
})

export const { useGetTasksQuery, useLazyGetTasksQuery } = tasksApi