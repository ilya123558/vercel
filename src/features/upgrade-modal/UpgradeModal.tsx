'use client'
import { useBuyUpgradeMutation } from "@/entities/upgrades/api/upgrades.api";
import { IGetUpgradesResponse, IUpgrade } from "@/entities/upgrades/types/upgrades";
import { useNotification } from "@/shared/hooks/useNotification";
import { ModalImage } from "@/shared/ui/modal-image/ModalImage";
import { ModalContentWrapper } from "@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper";
import { setBalance, useAppDispatch, useAppSelector } from "@/views/store";
import Image from "next/image";
import { useEffect } from "react";

interface IProps extends IGetUpgradesResponse {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const UpgradeModal = ({ isOpen, setIsOpen, ...props }: IProps) => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.main)
  const [buyUpgrade, { data, isSuccess, isError }] = useBuyUpgradeMutation()
  const {handleNotification} = useNotification()

  const handleClick = () => {
    buyUpgrade({upgradeId: 'level', points: 0})
  }

  useEffect(() => {
    if(isSuccess){
      if(data.success) {
        dispatch(setBalance((user?.balance || 0) - props.mainLevelUpgradeCost))
        setIsOpen(false)
        handleNotification("upgrade success")
      }else{
        setIsOpen(false)
        handleNotification("balance error")
      }
    }
  }, [isSuccess, data])

  useEffect(() => {
    if(isError){
      setIsOpen(false)
      handleNotification("balance error")
    }
  }, [isError])
  
  return (
    <ModalContentWrapper
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={(
        <div className="flex gap-[1.33vw] items-center">
          <p className="fs-15 font-bold">Level Up <span className="text-violet ml-[0.7vw]">{props.mainLevel}</span></p>
          <Image src={'/images/component-icons/arrow.png'} alt='arrow' width={16} height={16} quality={100} className='w-16px h-16px'/>
          <p className="fs-15 font-bold text-violet scale-[1.35] pb-[0.3vw]">{props.mainLevel + 1}</p>
        </div>
      )}
      imageComponent={
        <div className="relative translate-y-[-6.5vw]">
          <ModalImage variantBackground="violet" photo={'/images/component-icons/upgrade.png'} />
          <div className="absolute w-full bottom-[0vw]">
            <h4 className="font-bold fs-14 text-center mb-[3px]">Бонус за победу: <span className="ml-[0.3vw] text-violet font-bold fs-17">+{props.mainLevelWinBonus}</span></h4>
            <h4 className="font-bold fs-14 text-center mb-[3px]">Количество бросков: <span className="ml-[0.3vw] text-violet font-bold fs-17">+{props.mainLevelTossCount}</span></h4>
          </div>
        </div>
      }
      onClick={handleClick}
      textButton={'Улучшить'}
      withCloseBtn
      countValueInButton={props.mainLevelUpgradeCost}
    />
  );
};