'use client'
import { useUpdateEnergyMutation } from '@/entities/users/api/users.api';
import { ModalImage } from '@/shared/ui/modal-image/ModalImage';
import { ModalContentWrapper } from '@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper';
import { setEnergyPercent, useAppDispatch } from '@/views/store';
import { useEffect, useState } from 'react';

export const EnergyLimitModal = () => {
  const dispatch = useAppDispatch()

  const [isOpen, setIsOpen] = useState(true)

  const [updateEnergy, { data }] = useUpdateEnergyMutation()

  const handleClick = () => {
    updateEnergy()
  }

  useEffect(() => {
    if(data && data.success) {
      setIsOpen(false)
      dispatch(setEnergyPercent(data.energyPercent))
    }
  }, [data])

  return (
    <ModalContentWrapper
      title="Энергия кончилась"
      subTitle="У вас закончилось допустимое количество попыток."
      withCloseBtn
      imageComponent={<ModalImage variantBackground='yellow' photo='/images/modal/zip.png'/>}
      onClick={handleClick}
      textButton='Восполнить'
      countValueInButton={20}
      isOpen={isOpen}
    />
  );
};