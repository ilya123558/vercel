import { cc } from '@/shared/libs/concatClassName';
import React, { PropsWithChildren } from 'react';

interface IProps {
  className?: string
}

export const Container = ({ children, className }: PropsWithChildren<IProps>) => {
  return (
    <div className={cc('w-full p-[0px_13px]', className)}>
      {children}
    </div>
  );
};