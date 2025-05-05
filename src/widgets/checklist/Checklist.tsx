'use client'
import { Container } from "@/shared/ui/container/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { animationRight } from "@/shared/const/animation";
import { AutoBot } from "@/features/auto-bot/AutoBot";
import { useClaimDailyRewardQuery } from "@/entities/users/api/users.api";
import { DailyAdmissionModal } from "@/features/daily-admission-modal/DailyAdmissionModal";
import { EnergyLimitModal } from "@/features/energy-limit-modal/EnergyLimitModal";
import { useState } from "react";
import { AddEnergyModal } from "@/features/add-energy-modal/AddEnergyModal";

export const Checklist = () => {
  const router = useRouter()
  const [isOpenDailyAdmissionModal, setIsOpenDailyAdmissionModal] = useState(true)
  const [isOpenAddEnergyModal, setIsOpenAddEnergyModal] = useState(false)
  const { isSuccess } = useClaimDailyRewardQuery() // для кеширования запроса

  const handleTasksClick = () => {
    setIsOpenDailyAdmissionModal(true)
  }
  
  const handleEnergyClick = () => {
    setIsOpenAddEnergyModal(true)
  }
  
  return (
    <motion.div {...animationRight} className="relative z-[30] w-full">
      <AddEnergyModal isOpen={isOpenAddEnergyModal} setIsOpen={setIsOpenAddEnergyModal} />
      {isSuccess && <DailyAdmissionModal isOpen={isOpenDailyAdmissionModal} setIsOpen={setIsOpenDailyAdmissionModal} />}
      <Container>
        <div className="grid grid-cols-4 gap-[2.7vw] mt-[2.67vw]">
          <button onClick={handleTasksClick} className="overflow-hidden bg-gradient-block backdrop-blur-[20px] border-[1px] border-[#464D6854] h-70px rounded-[16px] flex items-center justify-center transition-all active:scale-95">
            <Image src={'/images/component-icons/scroll.png'} alt='scroll' width={100} height={100} quality={100} className='h-80px w-80px'/>
          </button>

          <button onClick={handleEnergyClick} className="overflow-hidden bg-gradient-block backdrop-blur-[20px] border-[1px] border-[#464D6854] h-70px rounded-[16px] flex items-center justify-center transition-all active:scale-95">
            <Image src={'/images/component-icons/energy.png'} alt='energy' width={100} height={100} quality={100} className='h-80px w-87px'/>
          </button>
        </div>
      </Container>
      <AutoBot />
    </motion.div>
  );
};