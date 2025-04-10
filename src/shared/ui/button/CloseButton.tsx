'use client'

import { cc } from "@/shared/libs/concatClassName";
import { PropsWithChildren } from "react";

interface IProps {
  onClick: () => void
  className?: string
}

export const CloseButton = ({ onClick, className }: PropsWithChildren<IProps>) => {
  return (
    <button onClick={onClick} className={cc("w-full p-[3.74vw_0px] will-change-transform rounded-[16px] bg-[#20202B] fs-13 font-medium active:scale-[0.98] transition-all", className)}>
      <div className="flex items-center justify-center gap-[2.67vw]">
        Закрыть
      </div>
    </button>
  );
};