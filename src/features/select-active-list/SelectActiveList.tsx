'use client'
import { CustomizationType } from "@/entities/general/types/general";
import { animationLeft } from "@/shared/const/animation";
import { BlockWrapper } from "@/shared/ui/wrappers/block-wrapper/BlockWrapper";
import { motion } from "framer-motion";

interface IProps {
  value: string
  setValue: (value: any) => void
  selectList: {title: string, value: any}[]
}

export const SelectActiveList = ({ value, setValue, selectList }: IProps) => {
  return (
    <motion.div {...animationLeft} className="flex items-center justify-between gap-[4px]">
      {selectList.map(selectItem => (
        <button key={selectItem.title} onClick={() => setValue(selectItem.value)} className="w-full will-change-transform">
          <BlockWrapper
            className={`flex items-center justify-center h-43px transition-all active:scale-[0.98] will-change-transform ${value === selectItem.value ? '!bg-gradient-default-button' : '!bg-gradient-block'}`}
            withBorderBottom
          >
            <p className={`fs-15 font-semibold transition-all ${value === selectItem.value ? '' : 'opacity-50'}`}>{selectItem.title}</p>
          </BlockWrapper>
        </button>
      ))}
    </motion.div>
  );
};