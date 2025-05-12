import { createApi } from '@reduxjs/toolkit/query/react'
import { ITossRequest, ITossResponse } from '../types/toss'
import { IClaimDailyRewardResponse } from '../types/claimDailyReward'
import { IDailyRewardInfoResponse } from '../types/dailyRewardInfo'
import { IEnergyRefillInfoResponse } from '../types/energyRefillInfo'
import { IEnergyRefillResponse } from '../types/energyRefill'
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
    dailyRewardInfo: builder.query<IDailyRewardInfoResponse, void>({
      query: () => '/users/dailyRewardInfo',
    }),
    energyRefillInfo: builder.query<IEnergyRefillInfoResponse, void>({
      query: () => '/users/energy/refill-info',
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
    energyRefill: builder.mutation<IEnergyRefillResponse, void>({
      query: () => ({
        url: '/users/energy/refill',
        method: 'POST',
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
  useLazyClaimDailyRewardQuery,
  useDailyRewardInfoQuery,
  useLazyDailyRewardInfoQuery,
  useEnergyRefillInfoQuery,
  useLazyEnergyRefillInfoQuery,
  useGetReferralsQuery, 
  useLazyGetReferralsQuery,
  useTossCoinMutation, 
  useUpdateEnergyMutation,
  useEnergyRefillMutation,
} = usersApi