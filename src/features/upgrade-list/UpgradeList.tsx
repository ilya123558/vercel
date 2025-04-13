'use client'
import { Button } from "@/shared/ui/button/Button";
import { Crystal } from "@/shared/ui/crystal/Crystal";
import { BlockWrapper } from "@/shared/ui/wrappers/block-wrapper/BlockWrapper";
import { ListWrapper } from "@/shared/ui/wrappers/list-wrapper/ListWrapper";
import { UpgradeModal } from "../upgrade-modal/UpgradeModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { animationWithDynamicDalay } from "@/shared/const/animation";
import { IUpgrade } from "@/entities/upgrades/types/upgrades";
import { useAppSelector } from "@/views/store";

// const currentEnergy = 15
// const list = [
//   {lvl: 3, bonus: 10, energy: 1, price: 5000},
//   {lvl: 3, bonus: 10, energy: 1, price: 5000},
//   {lvl: 3, bonus: 10, energy: 1, price: 5000},
//   {lvl: 3, bonus: 10, energy: 1, price: 5000},
//   {lvl: 3, bonus: 10, energy: 1, price: 5000},
//   {lvl: 3, bonus: 10, energy: 1, price: 5000},
//   {lvl: 3, bonus: 10, energy: 1, price: 5000},
//   {lvl: 3, bonus: 10, energy: 1, price: 5000},
//   {lvl: 3, bonus: 10, energy: 1, price: 5000},
//   {lvl: 3, bonus: 10, energy: 1, price: 5000},
// ]

interface IProps {
  list: IUpgrade[]
}

export const UpgradeList = ({ list }: IProps) => {
  const { user } = useAppSelector(state => state.main)
  const [openModal, setOpenModal] = useState(false)
  const [activeItem, setActiveItem] = useState<IUpgrade | null>(null)

  const handleClick = (item: IUpgrade) => {
    setActiveItem(item)
    setOpenModal(true)
  }

  if(!user) return <></>

  return (
    <ListWrapper>
      {openModal && activeItem && (
        <UpgradeModal
          closeModal={() => setOpenModal(false)}
          {...activeItem}
        />
      )}
      <ul className="flex flex-col gap-[2.67vw]">
        {list.map((item, index) => (
          <motion.li {...animationWithDynamicDalay(index)} key={index}>
            <BlockWrapper className="!bg-gradient-list-item border border-[#364357] p-[4.5vw_3.74vw_3.7vw]">
              <div className="p-[0px_1.1vw]">
                <div className="flex items-center mb-[10.14vw]">
                  <p className="font-medium fs-15">Текущий уровень:</p>
                  <p className="font-medium fs-15 ml-[4px] text-violet">{item.level}</p>
                </div>

                {item.winstreakBonus !== null && (
                  <div className="flex items-center mb-[2.4vw]">
                    <p className="font-medium fs-15">Бонус за победу:</p>
                    <p className="font-medium fs-15 ml-[4px] text-violet">+{item.winstreakBonus || 0}</p>
                  </div>
                )}

                {item.energyRecoveryCost !== null && (
                  <div className="flex items-center mb-[2.4vw]">
                    <p className="font-medium fs-15">Энергия:</p>
                    <p className="font-medium fs-15 ml-[4px] text-violet">+{item.energyRecoveryCost || 0}</p>
                  </div>
                )}

                {item.tossCountBonus !== null && (
                  <div className="flex items-center mb-[2.4vw]">
                    <p className="font-medium fs-15">Броски:</p>
                    <p className="font-medium fs-15 ml-[4px] text-violet">+{item.tossCountBonus || 0}</p>
                  </div>
                )}
                {/* <div className="flex items-center mb-[3.74vw]">
                  <p className="font-medium fs-15">Энергия:</p>
                  <p className="font-medium fs-15 ml-[4px] text-violet">{user.energyPercent} <span className="text-white">+{energyRecoveryCost || 0}</span></p>
                </div> */}
              </div>

              <Button onClick={() => handleClick(item)}>
                <div className="flex items-center gap-[3.6vw]">
                  <p className="fs-15 font-semibold">Прокачать</p>
                  <Crystal value={item.upgradeCost}/>
                </div>
              </Button>
            </BlockWrapper>
          </motion.li>
        ))}
      </ul>
    </ListWrapper>
  );
};