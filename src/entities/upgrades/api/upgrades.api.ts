import { IPageRequest } from '@/entities/general/types/general'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
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
      query: ({upgrade_type}) => ({
        url: `/upgrades/${upgrade_type}`,
        method: 'PUT'
      }),
      invalidatesTags: ['Upgrades']
    }),
  }),
})

export const { useGetUpgradesQuery, useLazyGetUpgradesQuery, useBuyUpgradeMutation } = upgradesApi