import { IPageResponse } from "@/entities/general/types/general";

export interface IAchievement {
  id: number
  title: string
  photo: string
  description: string
  completed: boolean
  currentProgress: number
  totalProgress: number
  reward: number
}

export interface IGetAchievementsResponse extends IPageResponse {
  achievements: IAchievement[]
}