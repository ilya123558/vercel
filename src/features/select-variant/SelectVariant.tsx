'use client'
import { DefaultBtn } from "@/shared/ui/button/DefaultBtn";
import { Container } from "@/shared/ui/container/Container";
import { TimerScale } from "@/shared/ui/timer-scale/TimerScale";
import { setCoinSide, setCountGame, setStatusGame, useAppDispatch, useAppSelector } from "@/views/store";
import { useEffect } from "react";

export const SelectVariant = () => {
  const dispatch = useAppDispatch()
  const { gameIsStarted, countGame, сoinSide } = useAppSelector(state => state.main.game)

  const handleSelectVariant = (value: 'heads' | 'tails') => {
    if(value === 'heads') {
      dispatch(setCoinSide('heads'))
    }

    if(value === 'tails') {
      dispatch(setCoinSide('tails'))
    }
  }

  useEffect(() => {
    if(сoinSide) {
      if(сoinSide === 'heads') {
        dispatch(setStatusGame('win'))
      }

      if(сoinSide === 'tails') {
        dispatch(setStatusGame('defeat'))
      }

      dispatch(setCountGame(countGame + 1))
    }
  }, [сoinSide])

  return (
    <Container className={gameIsStarted ? "" : "pointer-events-none opacity-0"}>
      <div className="flex items-center justify-between gap-[5px]">
        <DefaultBtn onClick={() => handleSelectVariant('heads')}>Орёл</DefaultBtn>
        <DefaultBtn onClick={() => handleSelectVariant('tails')}>Решка</DefaultBtn>
      </div>
      <TimerScale />
    </Container>
  );
};