'use client'
import { BlockWrapper } from "../wrappers/block-wrapper/BlockWrapper";
import { Button } from "../button/Button";
import { Crystal } from "../crystal/Crystal";
import { UpgradeModal } from "@/features/upgrade-modal/UpgradeModal";
import { useState } from "react";
import { IGetUpgradesResponse } from "@/entities/upgrades/types/upgrades";

export const UpgradeLevel = (props: IGetUpgradesResponse) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <UpgradeModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        {...props}
      />
      <BlockWrapper className="!bg-gradient-list-item border border-[#364357] p-[4.5vw_3.74vw_3.7vw]">
        <div className="p-[0px_1.1vw]">
          <div className="flex items-center mb-[10.14vw]">
            <p className="font-medium fs-15">Текущий уровень:</p>
            <p className="font-medium fs-15 ml-[4px] text-violet">{props.mainLevel}</p>
          </div>

          <div className="flex items-center mb-[2.4vw]">
            <p className="font-medium fs-15">Бонус за победу:</p>
            <p className="font-medium fs-15 ml-[4px] text-violet">+{props.mainLevelWinBonus}</p>
          </div>

          <div className="flex items-center mb-[2.4vw]">
            <p className="font-medium fs-15">Количество бросков:</p>
            <p className="font-medium fs-15 ml-[4px] text-violet">+{props.mainLevelTossCount}</p>
          </div>
        </div>

        <Button onClick={() => setIsOpen(true)} className="h-43px !p-0 flex items-center justify-center">
          <div className="flex items-center gap-[3.6vw]">
            <p className="fs-15 font-semibold">Прокачать</p>
            <Crystal value={props.mainLevelUpgradeCost}/>
          </div>
        </Button>
      </BlockWrapper>
    </>
  );
};
            