import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../types/users'
import { ITossRequest } from '../types/toss'
import { IClaimDailyRewardResponse } from '../types/claimDailyReward'
import { IUpdateEnergyResponse } from '../types/updateEnergy'
import { IGetReferralsResponse } from '../types/referrals'
import { IPageRequest } from '@/entities/general/types/general'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/users`,
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    // GET
    claimDailyReward: builder.query<IClaimDailyRewardResponse, void>({
      query: () => '/claimDailyReward',
    }),
    getReferrals: builder.query<IGetReferralsResponse, IPageRequest>({
      query: () => '/referrals',
    }),

    // POST
    loginByInitData: builder.mutation<IUser, {data_init: string}>({
      query: (body) => ({
        url: '/loginByInitData',
        method: 'POST',
        body
      }),
    }),
    tossCoin: builder.mutation<IUser, ITossRequest>({
      query: (body) => ({
        url: '/toss',
        method: 'POST',
        body
      }),
    }),
    updateEnergy: builder.mutation<IUpdateEnergyResponse, ITossRequest>({
      query: (body) => ({
        url: '/updateEnergy',
        method: 'POST',
        body
      }),
    }),
  }),
})

export const { 
  useClaimDailyRewardQuery, 
  useGetReferralsQuery, 
  useLazyClaimDailyRewardQuery,
  useLazyGetReferralsQuery,
  useLoginByInitDataMutation,
  useTossCoinMutation, 
  useUpdateEnergyMutation 
} = usersApi