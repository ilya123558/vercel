import { cc } from "@/shared/libs/concatClassName";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string
  withBorderBottom?: boolean
}

export const BlockWrapper = ({children, className, withBorderBottom}: PropsWithChildren<IProps>) => {
  return (
    <div className={cc(`w-full rounded-[16px] bg-gradient-block ${withBorderBottom ? 'border-b-[1px] border-[#464D6854]': ''}`, className)}>
      {children}
    </div>
  );
};