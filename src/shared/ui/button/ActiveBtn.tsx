'use client'
import { cc } from "@/shared/libs/concatClassName";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string
  onClick?: () => void
}

export const ActiveBtn = ({ children, className, onClick }: PropsWithChildren<IProps>) => {
  return (
    <button onClick={onClick} className={cc("active:scale-[0.98] will-change-transform transition-all border-b-[1px] border-[#464D6854] rounded-[16px] bg-gradient-default-button w-full font-medium fs-15 p-[3.34vw_0px]", className)}>
      {children}
    </button>
  );
};