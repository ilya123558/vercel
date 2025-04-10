import { CoinSide, IStatusResponse } from "@/entities/general/types/general"

export interface ITossRequest {
  coinSide: CoinSide
}

export interface ITossResponse extends IStatusResponse {
  guessed: boolean
  reward: number
  energyPercent: number
  tossCount: number
}