'use client'
import { IUser } from '@/entities/users/types/users';
import { animationLeft } from '@/shared/const/animation';
import { Crystal } from '@/shared/ui/crystal/Crystal';
import { InfoBlock } from '@/shared/ui/info-block/InfoBlock';
import { useAppSelector } from '@/views/store';
import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

export const Header = ({children}: PropsWithChildren) => {
  const { user } = useAppSelector(state => state.main) 

  const handleClick = () => {
    localStorage.setItem("accessToken", user?.accessToken || '');
    localStorage.setItem("refreshToken", user?.refreshToken || '');
    navigator.clipboard.writeText(JSON.stringify(user?.accessToken))
  }
  
  if(!user) {
    return <></>
  }
  
  return (
    <motion.header {...animationLeft} id='header' className="mt-[6px] flex flex-col gap-[2.67vw] p-[4vw_4.67vw] bg-gradient-block rounded-[16px] border-b-[1px] border-[#464D6854] will-change-transform">
      <div className='flex items-center justify-between'>
        <div onClick={handleClick} className="flex items-center gap-[6px]">
          <Crystal value={user.balance} />
          {/* <button onClick={handleBuyСrystals}>
            <svg className='min-w-19px min-h-18px' width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9.5" cy="9" r="9" fill="white" fillOpacity="0.2"/>
              <path d="M9.5 4.5V13.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 9L5 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button> */}
        </div>
        <InfoBlock title='lvl' value={user.level} />
        <InfoBlock title='Tasks' value={user.availableTasksCount} />
      </div>
      {children}
    </motion.header>
  );
};