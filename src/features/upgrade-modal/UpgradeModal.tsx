'use client'
import { ModalImage } from "@/shared/ui/modal-image/ModalImage";
import { ModalContentWrapper } from "@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper";
import Image from "next/image";

interface IProps {
  closeModal?: () => void
  lvl: number
  currentEnergy: number
  totalEnergy: number
  currentThrow: number
  totalThrow: number
  photo?: string
}

export const UpgradeModal = ({ closeModal, lvl, currentEnergy, currentThrow, totalEnergy, totalThrow, photo }: IProps) => {
  const handleClick = () => {}

  return (
    <ModalContentWrapper
      closeModal={closeModal}
      title={(
        <div className="flex gap-[1.33vw] items-center">
          <p className="fs-15 font-bold">Level Up <span className="text-violet ml-[0.7vw]">{lvl}</span></p>
          <Image src={'/images/component-icons/arrow.png'} alt='arrow' width={16} height={16} quality={100} className='w-16px h-16px'/>
          <p className="fs-15 font-bold text-violet scale-[1.35] pb-[0.3vw]">{lvl + 1}</p>
        </div>
      )}
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
      imageComponent={
        <div className="relative translate-y-[-6.5vw]">
          <ModalImage variantBackground="violet" photo={photo ? photo: '/images/component-icons/upgrade.png'} />
          <div className="absolute w-full bottom-[0vw]">
            <h4 className="font-bold fs-14 text-center mb-[3px]">Энергия: <span className="ml-[0.3vw] text-violet font-bold fs-17">{currentEnergy}/{totalEnergy}</span></h4>
            <h4 className="font-bold fs-14 text-center">Броски: <span className="ml-[0.3vw] text-violet font-bold fs-17">{currentThrow}/{totalThrow}</span></h4>
          </div>
        </div>
      }
      onClick={handleClick}
      textButton={'Улучшить'}
      withCloseBtn
      countValueInButton={20}
    />
  );
};