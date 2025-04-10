import React, { PropsWithChildren, useState } from 'react';
import { Modal as MuiModal } from "@mui/material";

interface IProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export const Modal = ({children, open, setOpen}: PropsWithChildren<IProps>) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiModal open={open} onClose={handleClose}>
      <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
        <div className='pointer-events-auto'>
          {children}
        </div>
      </div>
    </MuiModal>
  );
};