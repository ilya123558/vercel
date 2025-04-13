import { IPageRequest } from '@/entities/general/types/general'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IActivateCustomizationRequest, IActivateCustomizationResponse, IBuyCustomizationRequest, IBuyCustomizationResponse, IGetCustomizationsRequest, IGetCustomizationsResponse } from '../types/customizations'

export const customizationsApi = createApi({
  reducerPath: 'customizationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/customizations`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Customizations'],
  endpoints: (builder) => ({
    getCustomizations: builder.query<IGetCustomizationsResponse, IGetCustomizationsRequest>({
      query: (params) => ({
        url: '/',
        params 
      }),
      providesTags: ["Customizations"]
    }),
    getCustomizationsProfile: builder.query<IGetCustomizationsResponse, IGetCustomizationsRequest>({
      query: (params) => ({
        url: '/profile',
        params 
      }),
      providesTags: ["Customizations"]
    }),
    buyCustomization: builder.mutation<IBuyCustomizationResponse, IBuyCustomizationRequest>({
      query: ({customization_id}) => ({
        url: `/buy/${customization_id}`,
        method: 'POST'
      }),
      invalidatesTags: ["Customizations"]
    }),
    activateCustomization: builder.mutation<IActivateCustomizationResponse, IActivateCustomizationRequest>({
      query: ({customization_id}) => ({
        url: `/activate/${customization_id}`,
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