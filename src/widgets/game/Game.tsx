'use client'
import { GameStatusInfo } from "@/features/game-status-info/GameStatusInfo";
import { SelectVariant } from "@/features/select-variant/SelectVariant";
import { useEffect, useRef, useState } from "react";
import { CoinContent } from "@/features/coin-content/CoinContent";
import { resetGame, useAppDispatch } from "@/views/store";

export const Game = () => {
  const dispatch = useAppDispatch()
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

    window?.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    return () => {
      dispatch(resetGame())
    }
  }, [])

  return (
    <div ref={containerRef} className="">
      <div style={{height: `calc(${availableHeight}px - 13vw)`, opacity: availableHeight ? 1 : 0}} className="flex flex-col justify-end absolute w-full overflow-hidden">
        <GameStatusInfo />
        <CoinContent />
        <SelectVariant />
      </div>
    </div>
  );
};