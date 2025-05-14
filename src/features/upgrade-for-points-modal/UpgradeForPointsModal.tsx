'use client'
import { UpgradeType } from "@/entities/general/types/general";
import { useBuyUpgradeMutation } from "@/entities/upgrades/api/upgrades.api";
import { IUpgrade } from "@/entities/upgrades/types/upgrades";
import { useNotification } from "@/shared/hooks/useNotification";
import { Input } from "@/shared/ui/input/Input";
import { ModalContentWrapper } from "@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper";
import { useAppSelector } from "@/views/store";
import { ChangeEvent, useEffect, useState } from "react";

interface IProps extends IUpgrade {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const UpgradeForPointsModal = ({ isOpen, setIsOpen, ...props }: IProps) => {
  const { points } = useAppSelector(state => state.main.meta)
  const [value, setValue] = useState(1)

  const [buyUpgrade, { data, isSuccess, isError }] = useBuyUpgradeMutation()
  const {handleNotification} = useNotification()

  const handleClick = () => {
    if(0 >= value || value > points || typeof value !== 'number' || isNaN(value)) {
      handleNotification('upgrade incorrect')
      return
    }

    buyUpgrade({upgradeId: props.upgradeId, points: value})
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const result = e.target.valueAsNumber
    setValue(result)
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
      title={`Прокачка ${props.upgradeId === 'winstreak' ? 'Winstreak Bonus': 'Energy Recovery'}`}
      imageComponent={(
        <div className="w-full p-[6.4vw_5.61vw_5.34vw] flex justify-between">
          <div className="w-[40%]">
            <p className="fs-12 font-medium text-white opacity-50 mb-[1.34vw]">Использовать</p>
            <Input value={value} onChange={handleChange}/>
          </div>
          <div className="w-[55%]">
            <p className="fs-12 font-medium text-white opacity-50 mb-[1.34vw]">Доступно</p>
            <Input value={points} onChange={() => {}}/>
          </div>
        </div>
      )}
      onClick={handleClick}
      textButton={'Подтвердить'}
      withCloseBtn
    />
  );
};