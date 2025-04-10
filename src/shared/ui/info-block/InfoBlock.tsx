import React from 'react';

interface IProps {
  title: string
  value: string | number
}

export const InfoBlock = ({title, value}: IProps) => {
  return (
    <h3 className='fs-14 font-bold'>
      <span className='opacity-[0.5]'>{title}</span>
      <span className='fs-17 text-violet ml-[3px]'>{value}</span>
    </h3>
  );
};