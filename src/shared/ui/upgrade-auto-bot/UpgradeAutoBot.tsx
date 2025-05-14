'use client'
import { animationWithDynamicDalay } from "@/shared/const/animation";
import { motion } from "framer-motion";
import { BlockWrapper } from "../wrappers/block-wrapper/BlockWrapper";
import { Button } from "../button/Button";
import { Crystal } from "../crystal/Crystal";
import { IGetUpgradesResponse } from "@/entities/upgrades/types/upgrades";
import { setBalance, useAppDispatch, useAppSelector } from "@/views/store";
import { useBuyUpgradeMutation } from "@/entities/upgrades/api/upgrades.api";
import { useEffect } from "react";
import { useNotification } from "@/shared/hooks/useNotification";

export const UpgradeAutoBot = ({autobotPurchaseCost}: IGetUpgradesResponse) => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.main)
  const [buyUpgrade, {data, isError, isSuccess}] = useBuyUpgradeMutation()
  const { handleNotification } = useNotification()

  const handleClick = async() => {
    if(!user) return 

    if(user.balance < autobotPurchaseCost) {
      handleNotification("balance error")
      return
    }
    buyUpgrade({upgradeId: "autobot", points: 0})
  }

  useEffect(() => {
    if(isSuccess){
      if(data.success) {
        dispatch(setBalance((user?.balance || 0) - autobotPurchaseCost))
        handleNotification("upgrade success")
      }else{
        handleNotification("balance error")
      }
    }
  }, [isSuccess, data])

  useEffect(() => {
    if(isError){
      handleNotification("balance error")
    }
  }, [isError])

  return (
    <>
      <motion.li {...animationWithDynamicDalay(0)}>
        <BlockWrapper className="!bg-gradient-list-item border border-[#364357] p-[4.5vw_3.74vw_3.7vw]">
          <div className="p-[0px_1.1vw] fs-15">
            <p className="font-medium mb-[1vw]">Auto Bot</p>
            <div className="flex items-center mb-[2.4vw]">
              <p className="font-semibold text-nowrap">Количество авто-подбрасываний:</p>
              <p className="font-medium ml-[4px] text-violet">+100</p>
            </div>
          </div>
          <Button onClick={handleClick} className="h-43px !p-0 flex items-center justify-center">
            <div className="flex items-center gap-[3.6vw]">
              <p className="fs-15 font-semibold">Приобрести</p>
              <Crystal value={autobotPurchaseCost}/>
            </div>
          </Button>
        </BlockWrapper>
      </motion.li>
    </>
  );
};