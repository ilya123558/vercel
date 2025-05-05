import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../types/users'
import { ITossRequest, ITossResponse } from '../types/toss'
import { IClaimDailyRewardResponse } from '../types/claimDailyReward'
import { IUpdateEnergyResponse } from '../types/updateEnergy'
import { IGetReferralsResponse } from '../types/referrals'
import { IPageRequest } from '@/entities/general/types/general'
import { baseQueryWithRefresh } from '@/shared/libs/baseQueryWithRefreshю'


export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    // GET
    claimDailyReward: builder.query<IClaimDailyRewardResponse, void>({
      query: () => '/users/claimDailyReward',
    }),
    getReferrals: builder.query<IGetReferralsResponse, IPageRequest>({
      query: () => '/users/referrals',
    }),
    tossCoin: builder.mutation<ITossResponse, ITossRequest>({
      query: (body) => ({
        url: '/users/toss',
        method: 'POST',
        body
      }),
    }),
    updateEnergy: builder.mutation<IUpdateEnergyResponse, void>({
      query: () => ({
        url: '/users/updateEnergy',
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