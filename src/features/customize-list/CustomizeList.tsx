'use client'
import Image from "next/image";
import { BlockWrapper } from "@/shared/ui/wrappers/block-wrapper/BlockWrapper";
import { ListWrapper } from "@/shared/ui/wrappers/list-wrapper/ListWrapper"
import { useState } from "react";
import { BuyModal } from "../buy-modal/BuyModal";
import { motion } from "framer-motion";
import { animationImg } from "@/shared/const/animation";
import { ICustomization } from "@/entities/customizations/types/customizations";


interface IProps {
  list: ICustomization[]
}

export const CustomizeList = ({list}: IProps) => {
  const [openModal, setOpenModal] = useState(false)
  const [activeItem, setActiveItem] = useState<ICustomization | null>(null)

  const handleClick = (item: ICustomization) => {
    setActiveItem(item)
    setOpenModal(true)
  }

  return (
    <ListWrapper className="mt-[4vw]">
      {activeItem && (
        <BuyModal isOpen={openModal} setIsOpen={setOpenModal} {...activeItem}
        />
      )}
      <ul className="grid grid-cols-2 gap-[3px]">
        {list.map((customization, index) => (
          <li key={index} onClick={() => handleClick(customization)} className="active:scale-[0.98] transition-all will-change-transform p-[1px]">
            <BlockWrapper className={`w-full aspect-square flex items-center flex-col justify-between p-[5.87vw_8vw_3.2vw] !bg-gradient-list-item border border-[#383A46] ${customization.isActive ? 'border-violet' : 'border-[#383A46]'}`}>
              <div className="w-full aspect-square relative rounded-[16px] bg-[#2C2C3B] overflow-hidden">
                <motion.div {...animationImg}>
                  <Image 
                    src={customization.photo ? customization.photo : "/images/modal/zip.png"} 
                    alt="list-item-img" 
                    width={113} 
                    height={113} 
                    className="w-full h-full" 
                  />
                </motion.div>
                {!customization.isBought && (
                  <div className="rounded-[16px] absolute w-full h-full flex items-center justify-center bg-[#2c2c3bca] top-0 left-0">
                    <svg className="w-50px h-auto opacity-30" width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25 35.2917V41.125M10.4167 22.2507C11.7916 22.1667 13.4867 22.1667 15.6667 22.1667H34.3333C36.5132 22.1667 38.2084 22.1667 39.5833 22.2507M10.4167 22.2507C8.70072 22.3554 7.48333 22.591 6.44424 23.1204C4.79781 23.9592 3.45924 25.2977 2.62034 26.9442C1.66665 28.8161 1.66665 31.2661 1.66665 36.1667V40.25C1.66665 45.1506 1.66665 47.6006 2.62034 49.4725C3.45924 51.119 4.79781 52.4574 6.44424 53.2963C8.31595 54.25 10.7662 54.25 15.6667 54.25H34.3333C39.2339 54.25 41.6839 54.25 43.5558 53.2963C45.2023 52.4574 46.5407 51.119 47.3796 49.4725C48.3333 47.6006 48.3333 45.1506 48.3333 40.25V36.1667C48.3333 31.2661 48.3333 28.8161 47.3796 26.9442C46.5407 25.2977 45.2023 23.9592 43.5558 23.1204C42.5166 22.591 41.2992 22.3554 39.5833 22.2507M10.4167 22.2507V16.3333C10.4167 8.27919 16.9458 1.75 25 1.75C33.0541 1.75 39.5833 8.27919 39.5833 16.3333V22.2507" stroke="white" strokeWidth="2.83" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
              <h5 className="font-bold fs-11">{customization.title}</h5>
            </BlockWrapper>
          </li>
        ))}
      </ul>
    </ListWrapper>
  );
};