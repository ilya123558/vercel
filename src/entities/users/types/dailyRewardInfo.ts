import { IStatusResponse } from "@/entities/general/types/general";

export interface IDailyRewardInfoResponse extends IStatusResponse {
  dayRewards: number[],
  activeDay: number,
  claimedToday: boolean
}
