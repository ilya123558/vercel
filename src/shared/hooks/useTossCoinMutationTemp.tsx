import { CoinSide } from "@/entities/general/types/general"
import { ITossResponse } from "@/entities/users/types/toss"
import { useState } from "react"

type TReturn = [
  (value: { coinSide: CoinSide.HEADS | CoinSide.TAILS}) => void, 
  data: {data: ITossResponse | null}
]

export const useTossCoinMutationTemp = (): TReturn => {
  const [data, setData] = useState<ITossResponse | null>(null)

  const getData = ({ coinSide }: {coinSide: CoinSide.HEADS | CoinSide.TAILS})  => {
    setData({
      energyPercent: 100,
      guessed: Math.random() < 0.5,
      reward: 10,
      success: true,
      tossCount: 5
    })
  }

  return [getData, { data }]
}