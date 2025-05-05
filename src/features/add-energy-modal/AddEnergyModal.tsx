'use client'
import { useUpdateEnergyMutation } from '@/entities/users/api/users.api';
import { ImageWithSkeleton } from '@/shared/ui/image-with-skeleton/ImageWithSkeleton';
import { ModalImage } from '@/shared/ui/modal-image/ModalImage';
import { ModalContentWrapper } from '@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper';
import { setEnergyPercent, useAppDispatch } from '@/views/store';
import { useEffect, useState } from 'react';

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const AddEnergyModal = ({isOpen, setIsOpen}: IProps) => {
  const [toggle, setToggle] = useState(false)
  const dispatch = useAppDispatch()

  const handleClick = () => {

  }

  return (
    <ModalContentWrapper
      title="+10 Энергии"
      subTitle="Приобрести 10 единиц энергии"
      withCloseBtn
      imageComponent={(
        <div>
          <div className='w-full p-[0vw_14.4vw] flex items-center justify-center'>
            <div className='rounded-[10px] overflow-hidden'>
              <ImageWithSkeleton 
                src='/images/modal/add-energy.png'
                alt='add-energy'
                width={193}
                height={193}
              />
            </div>
          </div>
          <div className="p-[0vw_5.34vw_6.48vw]">
            <div className="flex gap-[2.4vw] items-start">
              <button onClick={() => setToggle(!toggle)} className='relative transition-all active:scale-95'>
                <svg className='w-18px' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.3333 8.99984C17.3333 12.9282 17.3333 14.8924 16.1128 16.1128C14.8925 17.3332 12.9283 17.3332 8.99993 17.3332C5.07155 17.3332 3.10737 17.3332 1.88699 16.1128C0.666595 14.8924 0.666595 12.9282 0.666595 8.99984C0.666595 5.07146 0.666595 3.10728 1.88699 1.8869C3.10737 0.666504 5.07155 0.666504 8.99993 0.666504C12.9283 0.666504 14.8925 0.666504 16.1128 1.8869C16.9243 2.69835 17.1963 3.83863 17.2873 5.6665" stroke="white" strokeWidth="1.25" strokeLinecap="round"/>
                </svg>
                <div className={`transition-all absolute w-full h-full top-0 left-0 flex items-center justify-center ${toggle ? '' : 'opacity-0'}`}>
                  <svg className='w-8px h-6px' width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.0834 3.4165L2.75007 5.08317L6.91674 0.916504" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              <div className="w-214px">
                <h4 className='mb-[5px] font-medium fs-12'>НЕ запрашивать подтверждение</h4>
                <p className='text-[#636262] fs-9 font-normal'>Вы подтверждаете, что по повторному нажатию на иконку подтверждение не потребуется</p>
              </div>
            </div>
          </div>
        </div>
      )}
      onClick={handleClick}
      textButton='Приобрести'
      countValueInButton={20}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};