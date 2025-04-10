'use client'
import Image from "next/image";
import { useState } from "react";
import { InputDeposit } from "@/features/input-deposit/InputDeposit";
import { InputWithdrawal } from "@/features/input-withdrawal/InputWithdrawal";
import { Button } from "@/shared/ui/button/Button";
import { motion } from "framer-motion";
import { animationBottom, animationLeft, animationRight, animationTop } from "@/shared/const/animation";


export const ExchangeContent = () => {
  const [activeExchange, setActiveDeposit] = useState<'deposit' | 'withdrawal'>('deposit')
  const [depositValue, setDepositValue] = useState<number | string>(1)
  const [withdrawalValue, setWithdrawalValue] = useState<number | string>(1)

  const handleExchangeClick = () => {
    if(activeExchange === 'deposit') {
      setActiveDeposit('withdrawal')
    }else{
      setActiveDeposit('deposit')
    }
  }

  return (
    <div>
      <motion.div {...animationRight} className="flex flex-col gap-[10px]">
        {activeExchange === 'deposit'
          ? (
            <InputDeposit 
              depositValue={depositValue} 
              setDepositValue={setDepositValue} 
            />
          )
          : (
            <InputWithdrawal 
              withdrawalValue={withdrawalValue} 
              setWithdrawalValue={setWithdrawalValue}
            />
          )
        }
        <div className="w-full bg-[#262437] rounded-[12px] overflow-hidden">
          <button onClick={handleExchangeClick} className="active:scale-95 transition-all will-change-transform w-full h-full flex items-center justify-center relative">
            <div className="w-30px h-30px rounded-full bg-violet blur-[30px] absolute"></div>
            <Image src={'/images/exchange/exchange.png'} alt="exchange" width={103} height={103} quality={100} className="w-103px h-103px"/>
          </button>
        </div>
        {activeExchange !== 'deposit'
          ? (
            <InputDeposit 
              depositValue={depositValue} 
              setDepositValue={setDepositValue} 
            />
          )
          : (
            <InputWithdrawal 
              withdrawalValue={withdrawalValue} 
              setWithdrawalValue={setWithdrawalValue}
            />
          )
        }
      </motion.div>
      <motion.div {...animationLeft}>
        <Button onClick={() => {}} className="mt-[17px]">Обменять</Button>
      </motion.div>
    </div>
  );
};