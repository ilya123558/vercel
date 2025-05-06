import { CoinSide } from "@/entities/general/types/general"
import { ITossResponse } from "@/entities/users/types/toss"
import { useState } from "react"

type TReturn = [
  (value: { coinSide: CoinSide.HEADS | CoinSide.TAILS}) => void, 
  data: {data: ITossResponse | null, isFetching: boolean}
]

export const useTossCoinMutationTemp = (): TReturn => {
  const [data, setData] = useState<ITossResponse | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const getData = ({ coinSide }: {coinSide: CoinSide.HEADS | CoinSide.TAILS})  => {
    setIsFetching(true)

    setTimeout(() => {
      setData({
        energyPercent: 100,
        guessed: Math.random() < 0.5,
        reward: 10,
        success: true,
        tossCount: 5
      })
      setIsFetching(false)
    }, 100)
  }

  return [getData, { data, isFetching }]
}