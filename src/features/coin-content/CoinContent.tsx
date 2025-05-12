'use client'
import { animationImg } from "@/shared/const/animation";
import { motion } from "framer-motion";
import animationData from '@/views/data/coin-animation.json'

import dynamic from 'next/dynamic';

const CoinAnimation = dynamic(() => import('@/shared/ui/coin-animation/CoinAnimation'), {
  ssr: false,
});

export const CoinContent = () => {
  return (
    <motion.div {...animationImg} className="flex h-full items-center justify-center relative">
      <div className="absolute bg-[#5D3EC1] rounded-full blur-[60px] max-w-160px max-h-160px w-160px-h h-160px-h"></div>
      <CoinAnimation animationData={animationData} />
    </motion.div>
  );
};