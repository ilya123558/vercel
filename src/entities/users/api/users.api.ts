import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../types/users'
import { ITossRequest, ITossResponse } from '../types/toss'
import { IClaimDailyRewardResponse } from '../types/claimDailyReward'
import { IUpdateEnergyResponse } from '../types/updateEnergy'
import { IGetReferralsResponse } from '../types/referrals'
import { IPageRequest } from '@/entities/general/types/general'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/users`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
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
    tossCoin: builder.mutation<ITossResponse, ITossRequest>({
      query: (body) => ({
        url: '/toss',
        method: 'POST',
        body
      }),
    }),
    updateEnergy: builder.mutation<IUpdateEnergyResponse, void>({
      query: () => ({
        url: '/updateEnergy',
        method: 'POST',
      }),
    }),
  }),
})

export const { 
  useClaimDailyRewardQuery, 
  useGetReferralsQuery, 
  useLazyClaimDailyRewardQuery,
  useLazyGetReferralsQuery,
  useTossCoinMutation, 
  useUpdateEnergyMutation 
} = usersApi