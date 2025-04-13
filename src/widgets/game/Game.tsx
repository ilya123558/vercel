'use client'
import Image from "next/image";
import { GameStatusInfo } from "@/features/game-status-info/GameStatusInfo";
import { SelectVariant } from "@/features/select-variant/SelectVariant";
import { nextGame, startGame, useAppDispatch, useAppSelector } from "@/views/store";
import { motion } from "framer-motion";
import { animationImg } from "@/shared/const/animation";
import { useNotification } from "@/shared/hooks/useNotification";
import { useEffect, useRef, useState } from "react";

export const Game = () => {
  const dispatch = useAppDispatch()

  const { gameIsStarted, statusGame } = useAppSelector(state => state.main.game)
  const { user } = useAppSelector(state => state.main)
  const { handleNotification } = useNotification()

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [availableHeight, setAvailableHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const height = window.innerHeight - rect.top;
        setAvailableHeight(height);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNextGame = () => {
    if(!statusGame) {
      return
    }else{
      dispatch(nextGame())
    }
  }

  const handleStartGame = () => {
    if(!user) return 

    if(user.tossCount === 0) {
      handleNotification("throw over")
      return
    }

    if(!gameIsStarted) {
      dispatch(startGame())
    }else{
      handleNextGame()
    }
  }

  return (
    <div ref={containerRef} className="">
      <div style={{height: `calc(${availableHeight}px - 78px)`, opacity: availableHeight ? 1 : 0}} className="flex flex-col justify-end absolute w-full">
        <GameStatusInfo />
        <motion.div {...animationImg} className="flex h-full items-center justify-center relative">
          <div className="absolute bg-[#5D3EC1] rounded-full blur-[60px] max-w-160px max-h-160px w-160px-h h-160px-h"></div>
          <Image style={{zIndex: 10}} onClick={handleStartGame} src={'/images/home/coin.png'} alt="coin" width={270} height={270} quality={100} className="max-w-270px max-h-270px w-270px-h h-270px-h" />
        </motion.div>
        <SelectVariant />
      </div>
    </div>
  );
};