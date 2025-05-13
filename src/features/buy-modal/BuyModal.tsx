import Image from "next/image";
import { useActivateCustomizationMutation, useBuyCustomizationMutation } from "@/entities/customizations/api/customizations.api";
import { ICustomization } from "@/entities/customizations/types/customizations";
import { CustomizationType } from "@/entities/general/types/general";
import { useNotification } from "@/shared/hooks/useNotification";
import { ModalContentWrapper } from "@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper";
import { useEffect } from "react";
import { setUser, setUserBackground, useAppDispatch } from "@/views/store";

interface IProps extends ICustomization {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const BuyModal = ({ isOpen, setIsOpen, title, id, price, isActive, photo, type, isBought }: IProps) => {
  const dispatch = useAppDispatch()
  const {handleNotification} = useNotification()
  
  const [buyCustomization, { isSuccess: buySuccess, isError: buyIsError }] = useBuyCustomizationMutation()
  const [activateCustomization, { isSuccess: activateSuccess, isError: activateIsError, data: activateData }] = useActivateCustomizationMutation()

  const handleBuyClick = () => {
    buyCustomization({customization_id: id})
  }

  const handleActivateClick = () => {
    activateCustomization({customization_id: id})
  }

  useEffect(() => {
    if(buySuccess && activateData) {
      setIsOpen(false)
      dispatch(setUserBackground(activateData.customization.photo))
      handleNotification("buy success")
    }
    if(activateSuccess) {
      setIsOpen(false)
      handleNotification("activeted success")
    }
  }, [buySuccess, activateSuccess, activateData])

  useEffect(() => {
    if(buyIsError){
      setIsOpen(false)
      handleNotification("balance error")
    }
  }, [buyIsError])

  useEffect(() => {
    if(activateIsError){
      setIsOpen(false)
      handleNotification("balance error")
    }
  }, [activateIsError])

  return (
    <ModalContentWrapper
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={title}
      subTitle={
        type === CustomizationType.COIN 
          ? "Дизайн монетки главного экрана"
          : "Задний фон для главного экрана"
      }
      imageComponent={(
        <div className='relative w-full flex items-center justify-center overflow-hidden p-[5vw_0px]'>
          <Image src={photo ? photo : "/images/modal/zip.png"} alt='modal-img' width={200} height={200} quality={100} className='rounded-[16px] min-h-150px w-150px' priority />
        </div>
      )}
      onClick={isBought ? handleActivateClick : handleBuyClick}
      textButton={isBought ? 'Активировать' : 'Приобрести'}
      countValueInButton={isBought ? undefined: price}
      withCloseBtn
      disableButton={isActive}
    />
  );
};