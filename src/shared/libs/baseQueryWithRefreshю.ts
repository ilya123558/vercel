import { LoginApiClient } from '@/entities/users/api/login.api'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const createBaseQuery = () => fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithRefresh = async (args: any, api: any, extraOptions: any) => {
  const baseQuery = createBaseQuery()

  const result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    const refreshToken = localStorage.getItem('refreshToken')

    if (refreshToken) {
      const refreshResult = await new LoginApiClient().refreshToken()

      if (refreshResult) {
        const newAccessToken = refreshResult.access
        const newRefreshToken = refreshResult.refresh
        localStorage.setItem('accessToken', newAccessToken)
        localStorage.setItem('refreshToken', newRefreshToken)

        args.headers = args.headers || {}
        args.headers['Authorization'] = `Bearer ${newAccessToken}`

        return baseQuery(args, api, extraOptions)
      }
    }
  }

  return result
}

export { baseQueryWithRefresh }
