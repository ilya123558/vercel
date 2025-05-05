'use client'
import { animationWithDynamicDalay } from "@/shared/const/animation";
import { motion } from "framer-motion";
import { BlockWrapper } from "../wrappers/block-wrapper/BlockWrapper";
import { Button } from "../button/Button";
import { Crystal } from "../crystal/Crystal";

export const UpgradeAutoBot = () => {
  const handleClick = () => {
    // запрос на сервер
    alert('Upgrade Auto Bot')
  }

  return (
    <>
      <motion.li {...animationWithDynamicDalay(0)}>
        <BlockWrapper className="!bg-gradient-list-item border border-[#364357] p-[4.5vw_3.74vw_3.7vw]">
          <div className="p-[0px_1.1vw] fs-15">
            <p className="font-medium mb-[1vw]">Auto Bot</p>
            <div className="flex items-center mb-[2.4vw]">
              <p className="font-semibold">Количество авто-подбрасываний:</p>
              <p className="font-medium ml-[4px] text-violet">+10</p>
            </div>
          </div>
          <Button onClick={handleClick} className="h-43px !p-0 flex items-center justify-center">
            <div className="flex items-center gap-[3.6vw]">
              <p className="fs-15 font-semibold">Приобрести</p>
              <Crystal value={5000}/>
            </div>
          </Button>
        </BlockWrapper>
      </motion.li>
    </>
  );
};