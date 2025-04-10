import { IPageResponse } from "@/entities/general/types/general"

export interface ITask {
  id: number
  title: string
  photo: string
  description: string
  completed: boolean
  currentProgress: number
  totalProgress: number
  reward: number
}

export interface IGetTasksResponse extends IPageResponse {
  tasks: ITask[]
}