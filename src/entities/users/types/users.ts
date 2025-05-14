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
  autoBotTossCount: number
  maxTossCount: number
  referralLink: string
  accessToken: string
  refreshToken: string
  background: string
}

export interface IReferralUser extends Pick<IUser, 'id' | 'fullName' | 'photo' | 'level'> {}