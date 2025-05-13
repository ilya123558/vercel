'use client'
import { CoinSide } from "@/entities/general/types/general";
import { useGame } from "@/shared/hooks/useGame";
import { ActiveBtn } from "@/shared/ui/button/ActiveBtn";
import { DefaultBtn } from "@/shared/ui/button/DefaultBtn";
import { DisableBtn } from "@/shared/ui/button/DisableBtn";
import { Container } from "@/shared/ui/container/Container";
import { TimerScale } from "@/shared/ui/timer-scale/TimerScale";
import { useAppSelector } from "@/views/store";
import { useEffect, useState } from "react";

export const SelectVariant = () => {
  const { 
    coinSide, 
    gameIsStarted, 
    statusGame,
    winSide,
    isCompiled,
    handleSelectVariant,
  } = useGame()
  const {autoBotToggle} = useAppSelector(state => state.main.autoBot)
  const [isSelected, setIsSelected] = useState(false)
  
  const handleSelectVariantHEADS = () => {
    if(isSelected) return
    setIsSelected(true)
    handleSelectVariant(CoinSide.HEADS)
  }

  const handleSelectVariantTAILS = () => {
    if(isSelected) return
    setIsSelected(true)
    handleSelectVariant(CoinSide.TAILS)
  }

  useEffect(() => {
    if(!isCompiled || gameIsStarted) {
      setIsSelected(false)
    }
  }, [isCompiled, autoBotToggle, gameIsStarted])

  useEffect(() => {
    if(!isSelected && autoBotToggle) {
      setTimeout(() => {
        setIsSelected(true)
        const randomChoice = Math.random() < 0.5 ? CoinSide.HEADS : CoinSide.TAILS;
        handleSelectVariant(randomChoice)
      }, 2000)
    }

  }, [isSelected, autoBotToggle])

  if(!gameIsStarted) {
    return <div className="max-h-[96px] h-full w-full bg-transparent"></div>
  }

  return (
    <div className={`relative z-[30] transition-all max-h-[96px] h-full bg-transparent translate-y-[-8vw]`}>
      <Container className="">
        <div className="flex items-center justify-between gap-[5px] h-full">
          {statusGame && coinSide
            ? (
              winSide === CoinSide.HEADS
                ? <ActiveBtn onClick={handleSelectVariantHEADS} className="!bg-gradient-default-button-bottom !p-[3.34vw_0px]">Орёл</ActiveBtn>
                : <DisableBtn onClick={handleSelectVariantHEADS} className="!p-[3.34vw_0px]">Орёл</DisableBtn>
            ) 
            : <DefaultBtn onClick={handleSelectVariantHEADS} className="!p-[3.34vw_0px]">Орёл</DefaultBtn>
          }
          {statusGame && coinSide
            ? (
              winSide === CoinSide.TAILS
                ? <ActiveBtn onClick={handleSelectVariantTAILS} className="!bg-gradient-default-button-bottom !p-[3.34vw_0px]">Решка</ActiveBtn>
                : <DisableBtn onClick={handleSelectVariantTAILS} className="!p-[3.34vw_0px]">Решка</DisableBtn>
            ) 
            : <DefaultBtn onClick={handleSelectVariantTAILS} className="!p-[3.34vw_0px]">Решка</DefaultBtn>
          }
        </div>
        <TimerScale />
      </Container>
    </div>
  );
};