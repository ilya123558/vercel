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

  return (
    <div style={{visibility: !gameIsStarted ? 'hidden':'visible'}} className={`transition-all ${!gameIsStarted ? "translate-y-[10px]" : "translate-y-[0px]"}`}>
      <Container>
        <div className="flex items-center justify-between gap-[5px]">
          {statusGame && coinSide
            ? (
              winSide === CoinSide.HEADS
                ? <ActiveBtn onClick={() => handleSelectVariant(CoinSide.HEADS)} className="!bg-gradient-default-button-bottom">Орёл</ActiveBtn>
                : <DisableBtn onClick={() => handleSelectVariant(CoinSide.HEADS)}>Орёл</DisableBtn>
            ) 
            : <DefaultBtn onClick={() => handleSelectVariant(CoinSide.HEADS)} >Орёл</DefaultBtn>
          }
          {statusGame && coinSide
            ? (
              winSide === CoinSide.TAILS
                ? <ActiveBtn onClick={() => handleSelectVariant(CoinSide.TAILS)} className="!bg-gradient-default-button-bottom">Решка</ActiveBtn>
                : <DisableBtn onClick={() => handleSelectVariant(CoinSide.TAILS)}>Решка</DisableBtn>
            ) 
            : <DefaultBtn onClick={() => handleSelectVariant(CoinSide.TAILS)} >Решка</DefaultBtn>
          }
        </div>
        <TimerScale />
      </Container>
    </div>
  );
};