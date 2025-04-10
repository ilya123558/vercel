'use client'
import { setCountGame, useAppDispatch, useAppSelector } from "@/views/store";
import { useEffect, useState } from "react";

export const TimerScale = () => {
  const totalTime = 20
  const dispatch = useAppDispatch()
  const { gameIsStarted, countGame } = useAppSelector(state => state.main.game)

  const [remainingTime, setRemainingTime] = useState(totalTime);
  const percentage = (remainingTime / totalTime) * 100;
  
  const handleTimeOver = () => {
    // time over code
    dispatch(setCountGame(countGame + 1))
  }

  useEffect(() => {
    if (remainingTime === 0 || !gameIsStarted) return;

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          handleTimeOver()
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime, gameIsStarted, countGame]);

  return (
    <div className="mt-[2.5vw]">
      <div className="flex items-center justify-between mb-[2vw]">
        <div className="flex items-center">
          <p className="fs-14 font-bold opacity-[0.5]">Game:</p>
          <p className="fs-17 font-bold ml-[4px]">#{countGame}</p>
        </div>
        <p className="fs-17 font-bold">{remainingTime} sec.</p>
      </div>
      <div className="bg-[#252433] rounded-[8px] w-full h-[8px]">
        <div style={{width: `${percentage}%`}} className={`rounded-[8px] transition-all duration-1000 h-[8px] bg-gradient-violet`}></div>
      </div>
    </div>
  )
};