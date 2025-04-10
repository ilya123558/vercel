import { CoinSide, IStatusResponse } from "@/entities/general/types/general"

export interface IUser {
  id: number
  photo: string | null
  username: string | null
  fullName: string
  dailyRewardDay: number
  claimDailyReward: boolean
  balance: number
  level: number
  availableTasksCount: number
  energyPercent: number
  tossCount: number
  maxTossCount: number
  referralLink: string
  accessToken: string
  refreshToken: string
}

export interface IReferralUser extends Pick<IUser, 'id' | 'fullName' | 'photo' | 'level'> {}