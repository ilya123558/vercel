import { IPageRequest } from '@/entities/general/types/general'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetTasksResponse } from '../types/tasks'
import { baseQueryWithRefresh } from '@/shared/libs/baseQueryWithRefreshю'

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    getTasks: builder.query<IGetTasksResponse, IPageRequest>({
      query: () => '/tasks/',
    }),
  }),
})

export const { useGetTasksQuery, useLazyGetTasksQuery } = tasksApi