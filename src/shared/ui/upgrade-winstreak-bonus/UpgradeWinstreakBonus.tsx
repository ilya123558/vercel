'use client'
import { BlockWrapper } from "../wrappers/block-wrapper/BlockWrapper";
import { Button } from "../button/Button";
import { useState } from "react";
import { IUpgrade } from "@/entities/upgrades/types/upgrades";
import { UpgradeForPointsModal } from "@/features/upgrade-for-points-modal/UpgradeForPointsModal";

export const UpgradeWinstreakBonus = (props: IUpgrade) => {
  const nextLvlTotalPoints = 20
  const nextLvlCurrentPoints = 15
  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
      <UpgradeForPointsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        {...props}
      />
      <BlockWrapper className="!bg-gradient-list-item border border-[#364357] p-[4.5vw_3.74vw_3.7vw]">
        <div className="p-[0px_1.1vw]">
          <div className="mb-[10.14vw]">
            <div className="flex justify-between items-end">
              <div className="flex items-center">
                <p className="font-medium fs-15">Winstreak Bonus: </p>
                <p className="font-medium fs-15 ml-[4px] text-violet">{props.level}</p>
              </div>
              <div className="flex items-center">
                <p className="font-medium fs-10">{nextLvlTotalPoints - nextLvlCurrentPoints} points. до</p>
                <p className="font-medium fs-10 ml-[4px] text-violet">{props.level + 1} lvl</p>
              </div>
            </div>
            <div className="mt-[2.67vw] w-full h-[4px] bg-[#ffffff49] rounded-[3px]">
              <div 
                style={{
                  backgroundImage: 'linear-gradient(90deg, #6F4AE7 0%, #A34AE7 100%)',
                  width: `${(100 / nextLvlTotalPoints) * nextLvlCurrentPoints}%`
                }} 
                className="h-full rounded-[3px] transition-all"
              ></div>
            </div>
          </div>

          <div className="flex items-center mb-[2.4vw]">
            <p className="font-medium fs-15">Бонус за победу:</p>
            <p className="font-medium fs-15 ml-[4px] text-violet">+{props.winstreakBonus || 0}</p>
          </div>

          <div className="flex items-center mb-[2.4vw]">
            <p className="font-medium fs-15">Броски:</p>
            <p className="font-medium fs-15 ml-[4px] text-violet">+{props.tossCountBonus || 0}</p>
          </div>
        </div>

        <Button onClick={() => setIsOpen(true)} className="h-43px !p-0 flex items-center justify-center">
          <div className="flex items-center gap-[3.47vw]">
            <p className="fs-15 font-semibold">Выбрать количество</p>
          </div>
        </Button>
      </BlockWrapper>
    </>
  );
};
            