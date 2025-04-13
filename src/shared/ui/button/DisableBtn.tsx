'use client'
import { cc } from "@/shared/libs/concatClassName";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string
  onClick?: () => void
}

export const DisableBtn = ({ children, className, onClick }: PropsWithChildren<IProps>) => {
  return (
    <button onClick={onClick} className={cc("border-b-[1px] border-[#464D6854] rounded-[16px] bg-gradient-block w-full font-medium fs-15 p-[3.34vw_0px]", className)}>
      <div className="opacity-[0.5]">{children}</div>
    </button>
  );
};