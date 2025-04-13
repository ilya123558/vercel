'use client'
import { cc } from "@/shared/libs/concatClassName";
import { PropsWithChildren } from "react";
import { Crystal } from "../crystal/Crystal";

interface IProps {
  onClick: () => void
  countValue?: number
  className?: string
}

export const Button = ({ children, onClick, countValue, className }: PropsWithChildren<IProps>) => {
  return (
    <button onClick={onClick} className={cc("w-full p-[3.74vw_0px] rounded-[16px] bg-gradient-violet fs-13 font-medium active:scale-[0.98] transition-all", className)}>
      <div className="flex items-center justify-center gap-[2.67vw]">
        {children}
        {countValue && <Crystal value={countValue}/>}
      </div>
    </button>
  );
};