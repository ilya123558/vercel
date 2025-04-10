import { IPageRequest } from '@/entities/general/types/general'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IActivateCustomizationRequest, IActivateCustomizationResponse, IBuyCustomizationRequest, IBuyCustomizationResponse, IGetCustomizationsResponse } from '../types/customizations'

export const customizationsApi = createApi({
  reducerPath: 'customizationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/customizations`,
  }),
  tagTypes: ['Customizations'],
  endpoints: (builder) => ({
    getCustomizations: builder.query<IGetCustomizationsResponse, IPageRequest>({
      query: () => '/',
    }),
    buyCustomization: builder.mutation<IBuyCustomizationResponse, IBuyCustomizationRequest>({
      query: ({customization_id}) => ({
        url: `/buy/${customization_id}`,
        method: 'POST'
      }),
    }),
    activateCustomization: builder.mutation<IActivateCustomizationResponse, IActivateCustomizationRequest>({
      query: ({customization_id}) => ({
        url: `/activate/${customization_id}`,
        method: 'PUT'
      }),
    }),
  }),
})

export const { 
  useGetCustomizationsQuery,
  useLazyGetCustomizationsQuery,
  useBuyCustomizationMutation,
  useActivateCustomizationMutation
} = customizationsApi