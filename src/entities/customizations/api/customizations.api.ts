import { IPageRequest } from '@/entities/general/types/general'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IActivateCustomizationRequest, IActivateCustomizationResponse, IBuyCustomizationRequest, IBuyCustomizationResponse, IGetCustomizationsRequest, IGetCustomizationsResponse } from '../types/customizations'
import { baseQueryWithRefresh } from '@/shared/libs/baseQueryWithRefreshю'

export const customizationsApi = createApi({
  reducerPath: 'customizationsApi',
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['Customizations'],
  endpoints: (builder) => ({
    getCustomizations: builder.query<IGetCustomizationsResponse, IGetCustomizationsRequest>({
      query: (params) => ({
        url: '/customizations/',
        params 
      }),
      providesTags: ["Customizations"]
    }),
    getCustomizationsProfile: builder.query<IGetCustomizationsResponse, IGetCustomizationsRequest>({
      query: (params) => ({
        url: '/customizations/profile',
        params 
      }),
      providesTags: ["Customizations"]
    }),
    buyCustomization: builder.mutation<IBuyCustomizationResponse, IBuyCustomizationRequest>({
      query: ({customization_id}) => ({
        url: `/customizations/buy/${customization_id}`,
        method: 'POST'
      }),
      invalidatesTags: ["Customizations"]
    }),
    activateCustomization: builder.mutation<IActivateCustomizationResponse, IActivateCustomizationRequest>({
      query: ({customization_id}) => ({
        url: `/customizations/activate/${customization_id}`,
        method: 'PUT'
      }),
      invalidatesTags: ["Customizations"]
    }),
  }),
})

export const { 
  useGetCustomizationsQuery,
  useGetCustomizationsProfileQuery,
  useLazyGetCustomizationsQuery,
  useLazyGetCustomizationsProfileQuery,
  useBuyCustomizationMutation,
  useActivateCustomizationMutation
} = customizationsApi