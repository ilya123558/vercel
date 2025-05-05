import { IPageRequest } from '@/entities/general/types/general'
import { createApi } from '@reduxjs/toolkit/query/react'
import { IGetAchievementsResponse } from '../types/achievements'
import { baseQueryWithRefresh } from '@/shared/libs/baseQueryWithRefreshю'

export const achievementsApi = createApi({
  reducerPath: 'achievementsApi',
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['Achievements'],
  endpoints: (builder) => ({
    getAchievements: builder.query<IGetAchievementsResponse, IPageRequest>({
      query: () => '/achievements/',
    }),
  }),
})

export const { useGetAchievementsQuery, useLazyGetAchievementsQuery } = achievementsApi