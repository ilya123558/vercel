'use client'
import Image from "next/image";
import { Container } from "@/shared/ui/container/Container";
import { motion } from "framer-motion";
import { animationRight } from "@/shared/const/animation";
import { AutoBot } from "@/features/auto-bot/AutoBot";
import { useLazyDailyRewardInfoQuery } from "@/entities/users/api/users.api";
import { DailyAdmissionModal } from "@/features/daily-admission-modal/DailyAdmissionModal";
import { useEffect, useState } from "react";
import { AddEnergyModal } from "@/features/add-energy-modal/AddEnergyModal";

export const Checklist = () => {
  const [isOpenDailyAdmissionModal, setIsOpenDailyAdmissionModal] = useState(false)
  const [isOpenAddEnergyModal, setIsOpenAddEnergyModal] = useState(false)
  const [getDailyRewardInfo] = useLazyDailyRewardInfoQuery()

  const handleTasksClick = () => {
    setIsOpenDailyAdmissionModal(true)
  }
  
  const handleEnergyClick = () => {
    setIsOpenAddEnergyModal(true)
  }

  useEffect(() => {
    (async () => {
      const data = await getDailyRewardInfo()

      if(data.data && !data.data.claimedToday) {
        setIsOpenDailyAdmissionModal(true)
      }
    })()
  }, [])

  return (
    <motion.div {...animationRight} className="relative z-[30] w-full">
      <DailyAdmissionModal isOpen={isOpenDailyAdmissionModal} setIsOpen={setIsOpenDailyAdmissionModal} />
      <AddEnergyModal isOpen={isOpenAddEnergyModal} setIsOpen={setIsOpenAddEnergyModal} />
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