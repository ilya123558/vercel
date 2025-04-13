'use client'
import { cc } from "@/shared/libs/concatClassName";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string
  onClick?: () => void
  disable?: boolean
}

export const DefaultBtn = ({ children, className, onClick, disable }: PropsWithChildren<IProps>) => {
  return (
    <button onClick={onClick} className={cc(`${disable ? '': 'active:scale-[0.98]'} transition-all border-b-[1px] border-[#464D6854] rounded-[16px] bg-gradient-block w-full font-medium fs-15 p-[3.34vw_0px]`, className)}>
      {children}
    </button>
  );
};