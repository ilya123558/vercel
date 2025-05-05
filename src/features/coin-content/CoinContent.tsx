'use client'
import { animationImg } from "@/shared/const/animation";
import { CoinAnimation } from "@/shared/ui/coin-animation/CoinAnimation";
import { motion } from "framer-motion";
import animationData from '@/views/data/coin-animation.json'

export const CoinContent = () => {
  console.log(animationData)
  return (
    <motion.div {...animationImg} className="flex h-full items-center justify-center relative">
      <div className="absolute bg-[#5D3EC1] rounded-full blur-[60px] max-w-160px max-h-160px w-160px-h h-160px-h"></div>
      {/* <Image style={{zIndex: 10}} onClick={handleStartGame} src={'/images/home/coin.png'} alt="coin" width={270} height={270} quality={100} className="max-w-250px max-h-250px w-250px-h h-250px-h" /> */}
      {/* <CoinAnimation animationData={animationData} /> */}
    </motion.div>
  );
};