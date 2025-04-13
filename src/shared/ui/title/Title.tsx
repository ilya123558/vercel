import { animationRight } from "@/shared/const/animation";
import { cc } from "@/shared/libs/concatClassName";
import { motion } from "framer-motion";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface IProps {
  withoutReturnLink?: boolean
  className?: string
}

export const Title = ({ children, withoutReturnLink, className }: PropsWithChildren<IProps>) => {

  if(withoutReturnLink) {
    return (
      <div className={className ? className: ""}>
        <div className={"col-span-3 font-semibold fs-17 w-full flex items-center justify-center h-42px"}>{children}</div>
      </div>
    ) 
  }

  return (
    <motion.div {...animationRight} className={cc("grid grid-cols-5", className)}>
      <Link href={'/home'} className="flex items-center pl-[2vw]">
        <svg className="w-10px h-18px" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 1.5L1 9L8.5 16.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
      <div className={"col-span-3 font-semibold fs-17 w-full flex items-center justify-center h-42px"}>{children}</div>
    </motion.div>
  );
};