import { IUser } from "./users"

export interface ILoginByInitDataResponse {
  user: IUser
  access: string
  refresh: string
}