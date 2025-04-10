import { useGetHeight } from "@/shared/hooks/useGetHeight";
import { cc } from "@/shared/libs/concatClassName";
import { PropsWithChildren, useRef } from "react";

interface IProps {
  className?: string
}

export const ListWrapper = ({ children, className }: PropsWithChildren<IProps>) => {
  const containerRef = useRef(null)
  const { height } = useGetHeight({ containerRef })

  return (
    <div style={{ height, paddingBottom: height ? '15px': '0px' }} ref={containerRef} className={cc(`overflow-y-auto`, className)}>
      {children}
    </div>
  );
};