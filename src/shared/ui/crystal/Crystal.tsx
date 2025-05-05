import { formatCount } from '@/shared/libs/formatCount';
import Image from 'next/image';
import React from 'react';

interface IProps {
  value: number | string
  reverse?: boolean
  classNameImage?: string
  classNameText?: string
  withPlus?: boolean
}

export const Crystal = ({value, reverse, classNameImage, classNameText, withPlus}: IProps) => {
  return (
    <div className={`flex items-center justify-center gap-[3px] ${reverse ? 'flex-row-reverse' : ''}`}>
      <Image src={'/images/component-icons/crystal.png'} alt='crystal' width={100} height={100} quality={100} className={classNameImage ? classNameImage : 'w-20px h-20px'}/>
      <p className={classNameText ? classNameText : 'font-bold fs-16'}>{typeof value === 'number' ? `${withPlus ? '+': ''}${formatCount(value)}` : `${withPlus ? '+': ''}${value}`}</p>
    </div>
  );
};