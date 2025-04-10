import { IPageRequest } from '@/entities/general/types/general'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetAchievementsResponse } from '../types/achievements'

export const achievementsApi = createApi({
  reducerPath: 'achievementsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/achievements`,
  }),
  tagTypes: ['Achievements'],
  endpoints: (builder) => ({
    getAchievements: builder.query<IGetAchievementsResponse, IPageRequest>({
      query: () => '/',
    }),
  }),
})

export const {  } = achievementsApi