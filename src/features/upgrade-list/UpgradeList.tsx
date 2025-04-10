'use client'
import { Button } from "@/shared/ui/button/Button";
import { Crystal } from "@/shared/ui/crystal/Crystal";
import { BlockWrapper } from "@/shared/ui/wrappers/block-wrapper/BlockWrapper";
import { ListWrapper } from "@/shared/ui/wrappers/list-wrapper/ListWrapper";
import { UpgradeModal } from "../upgrade-modal/UpgradeModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { animationWithDynamicDalay } from "@/shared/const/animation";

const currentEnergy = 15
const list = [
  {lvl: 3, bonus: 10, energy: 1, price: 5000},
  {lvl: 3, bonus: 10, energy: 1, price: 5000},
  {lvl: 3, bonus: 10, energy: 1, price: 5000},
  {lvl: 3, bonus: 10, energy: 1, price: 5000},
  {lvl: 3, bonus: 10, energy: 1, price: 5000},
  {lvl: 3, bonus: 10, energy: 1, price: 5000},
  {lvl: 3, bonus: 10, energy: 1, price: 5000},
  {lvl: 3, bonus: 10, energy: 1, price: 5000},
  {lvl: 3, bonus: 10, energy: 1, price: 5000},
  {lvl: 3, bonus: 10, energy: 1, price: 5000},
]

export const UpgradeList = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true)
  }

  return (
    <ListWrapper>
      {openModal && (
        <UpgradeModal
          closeModal={() => setOpenModal(false)}
          lvl={3}
          currentEnergy={32}
          totalEnergy={32}
          currentThrow={10}
          totalThrow={10}
        />
      )}
      <ul className="flex flex-col gap-[2.67vw]">
        {list.map(({lvl, bonus, energy, price}, index) => (
          <motion.li {...animationWithDynamicDalay(index)} key={index}>
            <BlockWrapper className="!bg-gradient-list-item border border-[#364357] p-[4.5vw_3.74vw_3.7vw]">
              <div className="p-[0px_1.1vw]">
                <div className="flex items-center mb-[10.14vw]">
                  <p className="font-medium fs-15">Текущий уровень:</p>
                  <p className="font-medium fs-15 ml-[4px] text-violet">{lvl}</p>
                </div>

                <div className="flex items-center mb-[2.4vw]">
                  <p className="font-medium fs-15">Бонус за победу:</p>
                  <p className="font-medium fs-15 ml-[4px] text-violet">+{bonus}</p>
                </div>

                <div className="flex items-center mb-[3.74vw]">
                  <p className="font-medium fs-15">Энергия:</p>
                  <p className="font-medium fs-15 ml-[4px] text-violet">{currentEnergy} <span className="text-white">+{energy}</span></p>
                </div>
              </div>

              <Button onClick={handleClick}>
                <div className="flex items-center gap-[3.6vw]">
                  <p className="fs-15 font-semibold">Прокачать</p>
                  <Crystal value={price}/>
                </div>
              </Button>
            </BlockWrapper>
          </motion.li>
        ))}
      </ul>
    </ListWrapper>
  );
};