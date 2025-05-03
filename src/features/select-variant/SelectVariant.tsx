'use client'
import { CoinSide } from "@/entities/general/types/general";
import { useTossCoinMutation } from "@/entities/users/api/users.api";
import { ITossResponse } from "@/entities/users/types/toss";
import { ActiveBtn } from "@/shared/ui/button/ActiveBtn";
import { DefaultBtn } from "@/shared/ui/button/DefaultBtn";
import { DisableBtn } from "@/shared/ui/button/DisableBtn";
import { Container } from "@/shared/ui/container/Container";
import { TimerScale } from "@/shared/ui/timer-scale/TimerScale";
import { resetGame, setCoinSide, setEnergyPercent, setStatusGame, setTossCount, useAppDispatch, useAppSelector } from "@/views/store";
import { useEffect, useState } from "react";

export const SelectVariant = () => {
  const dispatch = useAppDispatch()
  const { gameIsStarted, coinSide, statusGame } = useAppSelector(state => state.main.game)
  const [winSide, setWinSide] = useState<CoinSide | null>(null)
  
  const [tossCoin, { data: toss, isError, error }] = useTossCoinMutation()

  const handleSelectVariant = (value: CoinSide) => {
    if(statusGame) return

    if(value === CoinSide.HEADS) {
      dispatch(setCoinSide(CoinSide.HEADS))
    }

    if(value === CoinSide.TAILS) {
      dispatch(setCoinSide(CoinSide.TAILS))
    }
  }

  useEffect(() => {
    if(toss) {
      dispatch(setEnergyPercent(toss.energyPercent))
      dispatch(setTossCount(toss.tossCount))

      if(toss.guessed) {
        dispatch(setStatusGame('win'))
        setWinSide(coinSide)
      }else{
        dispatch(setStatusGame('defeat'))
        setWinSide(coinSide === CoinSide.HEADS ? CoinSide.TAILS: CoinSide.HEADS)
      } 
    }
  }, [toss])

  useEffect(() => {
    if(gameIsStarted && coinSide) {
      tossCoin({coinSide})
    }
  }, [gameIsStarted, coinSide])

  useEffect(() => {
    return () => {
      dispatch(resetGame())
    }
  }, [])

  if(!gameIsStarted) {
    return <div className="max-h-[96px] h-full w-full bg-transparent"></div>
  }

  return (
    <div className={`transition-all max-h-[96px] h-full bg-transparent`}>
      <Container>
        <div className="flex items-center justify-between gap-[5px] h-full">
          {statusGame && coinSide
            ? (
              winSide === CoinSide.HEADS
                ? <ActiveBtn onClick={() => handleSelectVariant(CoinSide.HEADS)} className="!bg-gradient-default-button-bottom !p-[3.34vw_0px]">Орёл</ActiveBtn>
                : <DisableBtn onClick={() => handleSelectVariant(CoinSide.HEADS)} className="!p-[3.34vw_0px]">Орёл</DisableBtn>
            ) 
            : <DefaultBtn onClick={() => handleSelectVariant(CoinSide.HEADS)} className="!p-[3.34vw_0px]">Орёл</DefaultBtn>
          }
          {statusGame && coinSide
            ? (
              winSide === CoinSide.TAILS
                ? <ActiveBtn onClick={() => handleSelectVariant(CoinSide.TAILS)} className="!bg-gradient-default-button-bottom !p-[3.34vw_0px]">Решка</ActiveBtn>
                : <DisableBtn onClick={() => handleSelectVariant(CoinSide.TAILS)} className="!p-[3.34vw_0px]">Решка</DisableBtn>
            ) 
            : <DefaultBtn onClick={() => handleSelectVariant(CoinSide.TAILS)} className="!p-[3.34vw_0px]">Решка</DefaultBtn>
          }
        </div>
        <TimerScale />
      </Container>
    </div>
  );
};