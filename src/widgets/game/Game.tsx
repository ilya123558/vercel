'use client'
import Image from "next/image";
import { useRef } from "react";
import { GameStatusInfo } from "@/features/game-status-info/GameStatusInfo";
import { SelectVariant } from "@/features/select-variant/SelectVariant";
import { useGetHeight } from "@/shared/hooks/useGetHeight";
import { startGame, useAppDispatch, useAppSelector } from "@/views/store";
import { motion } from "framer-motion";
import { animationImg } from "@/shared/const/animation";

export const Game = () => {
  const dispatch = useAppDispatch()
  const { gameIsStarted } = useAppSelector(state => state.main.game)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const { height } = useGetHeight({ containerRef })

  const handleStartGame = () => {
    if(!gameIsStarted) {
      dispatch(startGame())
    }
  }
  
  return (
    <div style={{ maxHeight: height, height, opacity: height === 0 ? 0 : 1}} ref={containerRef} className="flex flex-col justify-end pb-[5vw]">
      <GameStatusInfo />
      <motion.div {...animationImg} className="flex h-full items-center justify-center relative">
        <div className="absolute bg-[#5D3EC1] rounded-full blur-[40px] w-210px h-210px"></div>
        <Image onClick={handleStartGame} src={'/images/home/coin.png'} alt="coin" width={270} height={270} quality={100} className="w-270px h-270px z-10" />
      </motion.div>
      <SelectVariant />
    </div>
  );
};