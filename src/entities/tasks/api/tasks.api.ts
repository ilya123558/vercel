import { IPageRequest } from '@/entities/general/types/general'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetTasksResponse } from '../types/tasks'

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/tasks`,
  }),
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    getTasks: builder.query<IGetTasksResponse, IPageRequest>({
      query: () => '/',
    }),
  }),
})

export const { useGetTasksQuery, useLazyGetTasksQuery } = tasksApi