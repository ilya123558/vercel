import { IStatusResponse } from "@/entities/general/types/general";

export interface IClaimDailyRewardResponse extends IStatusResponse {
  reward: number,
  day: number
}
