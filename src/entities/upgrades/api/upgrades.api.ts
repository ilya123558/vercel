import { IPageRequest } from '@/entities/general/types/general'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBuyUpgradeRequest, IBuyUpgradeResponse, IGetUpgradesResponse } from '../types/upgrades'

export const upgradesApi = createApi({
  reducerPath: 'upgradesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/upgrades`,
  }),
  tagTypes: ['Upgrades'],
  endpoints: (builder) => ({
    getUpgrades: builder.query<IGetUpgradesResponse, IPageRequest>({
      query: () => '/',
    }),
    buyUpgrade: builder.mutation<IBuyUpgradeResponse, IBuyUpgradeRequest>({
      query: ({upgrade_type}) => ({
        url: `/${upgrade_type}`,
        method: 'PUT'
      }),
    }),
  }),
})

export const { useGetUpgradesQuery, useLazyGetUpgradesQuery, useBuyUpgradeMutation } = upgradesApi