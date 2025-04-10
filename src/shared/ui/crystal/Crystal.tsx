import { formatCount } from '@/shared/libs/formatCount';
import Image from 'next/image';
import React from 'react';

interface IProps {
  value: number | string
  reverse?: boolean
  classNameImage?: string
  classNameText?: string
}

export const Crystal = ({value, reverse, classNameImage, classNameText}: IProps) => {
  return (
    <div className={`flex items-center justify-center gap-[3px] ${reverse ? 'flex-row-reverse' : ''}`}>
      <Image src={'/images/component-icons/crystal.png'} alt='crystal' width={20} height={20} quality={100} className={classNameImage ? classNameImage : 'w-20px h-20px'}/>
      <p className={classNameText ? classNameText : 'font-bold fs-16'}>{typeof value === 'number' ? formatCount(value) : value}</p>
    </div>
  );
};