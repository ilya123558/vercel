import { IPageRequest } from '@/entities/general/types/general'
import { createApi } from '@reduxjs/toolkit/query/react'
import { IBuyUpgradeRequest, IBuyUpgradeResponse, IGetUpgradesResponse } from '../types/upgrades'
import { baseQueryWithRefresh } from '@/shared/libs/baseQueryWithRefreshю'

export const upgradesApi = createApi({
  reducerPath: 'upgradesApi',
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['Upgrades'],
  endpoints: (builder) => ({
    getUpgrades: builder.query<IGetUpgradesResponse, IPageRequest>({
      query: () => '/upgrades/',
      providesTags: ['Upgrades']
    }),
    buyUpgrade: builder.mutation<IBuyUpgradeResponse, IBuyUpgradeRequest>({
      query: (body) => ({
        url: `/upgrades/`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Upgrades']
    }),
  }),
})

export const { useGetUpgradesQuery, useLazyGetUpgradesQuery, useBuyUpgradeMutation } = upgradesApi