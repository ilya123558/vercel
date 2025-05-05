'use client'
import { useBuyUpgradeMutation } from "@/entities/upgrades/api/upgrades.api";
import { IUpgrade } from "@/entities/upgrades/types/upgrades";
import { useNotification } from "@/shared/hooks/useNotification";
import { ModalImage } from "@/shared/ui/modal-image/ModalImage";
import { ModalContentWrapper } from "@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper";
import Image from "next/image";
import { useEffect } from "react";

interface IProps extends IUpgrade {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const UpgradeModal = ({ isOpen, setIsOpen, level, upgradeCost, energyRecoveryCost, tossCountBonus, winstreakBonus, type }: IProps) => {
  const [buyUpgrade, { data, isSuccess, isError }] = useBuyUpgradeMutation()
  const {handleNotification} = useNotification()

  const handleClick = () => {
    buyUpgrade({upgrade_type: type})
  }

  useEffect(() => {
    if(isSuccess){
      if(data.success) {
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
          <p className="fs-15 font-bold">Level Up <span className="text-violet ml-[0.7vw]">{level}</span></p>
          <Image src={'/images/component-icons/arrow.png'} alt='arrow' width={16} height={16} quality={100} className='w-16px h-16px'/>
          <p className="fs-15 font-bold text-violet scale-[1.35] pb-[0.3vw]">{level + 1}</p>
        </div>
      )}

      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
      imageComponent={
        <div className="relative translate-y-[-6.5vw]">
          <ModalImage variantBackground="violet" photo={'/images/component-icons/upgrade.png'} />
          <div className="absolute w-full bottom-[0vw]">
            {winstreakBonus !== null && <h4 className="font-bold fs-14 text-center mb-[3px]">Бонус за победу: <span className="ml-[0.3vw] text-violet font-bold fs-17">+{winstreakBonus}</span></h4>}
            {energyRecoveryCost  !== null && <h4 className="font-bold fs-14 text-center mb-[3px]">Энергия: <span className="ml-[0.3vw] text-violet font-bold fs-17">+{energyRecoveryCost}</span></h4>}
            {tossCountBonus !== null && <h4 className="font-bold fs-14 text-center mb-[3px]">Броски: <span className="ml-[0.3vw] text-violet font-bold fs-17">+{tossCountBonus}</span></h4>}
          </div>
        </div>
      }
      onClick={handleClick}
      textButton={'Улучшить'}
      withCloseBtn
      countValueInButton={upgradeCost}
    />
  );
};