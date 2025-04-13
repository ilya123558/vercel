'use client'
import { ModalContentWrapper } from '@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper';
import { DailyAdmissionContent } from '../daily-admission-content/DailyAdmissionContent';
import { IClaimDailyRewardResponse } from '@/entities/users/types/claimDailyReward';
import { useState } from 'react';

export const DailyAdmissionModal = (props: IClaimDailyRewardResponse) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = async() => {
    // забрать дневную награду
    setIsOpen(false)
  }

  return (
    <ModalContentWrapper
      title="Ежедневный вход"
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      imageComponent={<DailyAdmissionContent {...props} />}
      onClick={handleClick}
      textButton='Забрать'
      isOpen={isOpen}
    />
  );
};