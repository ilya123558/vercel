"use client";
import React, { useState } from 'react';
import { Button } from '../../button/Button';
import { CloseButton } from '../../button/CloseButton';
import { Modal } from '../../modal/Modal';

interface IProps {
  title: string | React.JSX.Element
  subTitle: string
  withCloseBtn?: boolean
  imageComponent: React.JSX.Element
  onClick: () => void
  countValueInButton?: number
  textButton: string
  closeModal?: () => void
}

export const ModalContentWrapper = ({withCloseBtn, title, subTitle, imageComponent, onClick, countValueInButton, textButton, closeModal}: IProps) => {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    if(closeModal) {
      closeModal()
    }

    setOpen(false)
  }

  return (
    <Modal open={open} setOpen={handleClose}>
      <div className="flex flex-col gap-[2.65vw] min-w-300px">
        <div className="w-300 rounded-[20px] flex items-center flex-col pt-[4vw] bg-dark-violet relative border-[1px] border-dark-blue">
          <button onClick={handleClose} className='absolute top-15px right-15px'>
            <svg className='min-w-20px min-h-20px' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9.5" fill="#1D222E" fillOpacity="0.5" stroke="#364357"/>
              <path d="M13.182 6.81836L6.81805 13.1823" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M13.182 13.1821L6.81805 6.81817" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div className='fs-15 font-bold'>{title}</div>
          <p className='fs-10 max-w-190px text-center opacity-[0.5] mt-[7px]'>{subTitle}</p>
          {imageComponent}
        </div>
        <Button onClick={onClick} countValue={countValueInButton}>{textButton}</Button>
        {withCloseBtn && <CloseButton onClick={handleClose} />}
      </div>
    </Modal>
  );
};