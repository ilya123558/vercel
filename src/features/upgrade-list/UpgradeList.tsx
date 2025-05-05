'use client'
import { ListWrapper } from "@/shared/ui/wrappers/list-wrapper/ListWrapper";
import { motion } from "framer-motion";
import { animationWithDynamicDalay } from "@/shared/const/animation";
import { IUpgrade } from "@/entities/upgrades/types/upgrades";
import { UpgradeAutoBot } from "@/shared/ui/upgrade-auto-bot/UpgradeAutoBot";
import { UpgradeLevel } from "@/shared/ui/upgrade-level/UpgradeLevel";
import { UpgradeType } from "@/entities/general/types/general";
import { UpgradeWinstreakBonus } from "@/shared/ui/upgrade-winstreak-bonus/UpgradeWinstreakBonus";
import { UpgradeEnergyRecovery } from "@/shared/ui/upgrade-energy-recovery/UpgradeEnergyRecovery";

interface IProps {
  list: IUpgrade[]
}

export const UpgradeList = ({ list }: IProps) => {
  return (
    <ListWrapper>
      <ul className="flex flex-col gap-[2.67vw]">
        <UpgradeAutoBot />

        {list.map((item, index) => (
          <motion.li {...animationWithDynamicDalay(index + 1)} key={index}>
            {item.type === UpgradeType.LEVEL && (
              <UpgradeLevel {...item} />
            )}
            {item.type === UpgradeType.WINSTREAK && (
              <UpgradeWinstreakBonus {...item} />
            )}
            {item.type === UpgradeType.RECOVERY && (
              <UpgradeEnergyRecovery {...item} />
            )}
          </motion.li>
        ))}
      </ul>
    </ListWrapper>
  );
};