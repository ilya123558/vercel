import Image from 'next/image';
import React from 'react';

interface IProps {
  photo: string
  variantBackground?: 'yellow' | 'violet'
}

export const ModalImage = ({photo, variantBackground}: IProps) => {
  return (
    <div className='relative w-full flex items-center justify-center'>
      {variantBackground && variantBackground === 'violet'
        ? <Image src={'/images/modal/violet-bg.png'} alt='violet-bg' width={260} height={260} className='min-w-260px min-h-260px' />
        : <Image src={'/images/modal/yellow-bg.png'} alt='yellow-bg' width={260} height={260} className='min-w-260px min-h-260px' />
      }
      <Image src={photo} alt='modal-img' width={400} height={400} quality={100} className='absolute h-130px w-130px' priority />
    </div>
  );
};