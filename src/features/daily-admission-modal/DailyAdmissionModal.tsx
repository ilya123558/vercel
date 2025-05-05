'use client'
import { ModalContentWrapper } from '@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper';
import { DailyAdmissionContent } from '../daily-admission-content/DailyAdmissionContent';
import { IClaimDailyRewardResponse } from '@/entities/users/types/claimDailyReward';
import { useState } from 'react';
import { useClaimDailyRewardQuery } from '@/entities/users/api/users.api';

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const DailyAdmissionModal = ({isOpen, setIsOpen}: IProps) => {
  const { data: claimDailyRewardData } = useClaimDailyRewardQuery()

  const handleClick = () => {
    // забрать дневную награду
    setIsOpen(false)
  }

  return (
    <ModalContentWrapper
      title="Ежедневный вход"
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      imageComponent={claimDailyRewardData ? <DailyAdmissionContent {...claimDailyRewardData} /> : <></>}
      onClick={handleClick}
      textButton='Забрать'
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};