'use client'
import { ModalContentWrapper } from '@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper';
import { DailyAdmissionContent } from '../daily-admission-content/DailyAdmissionContent';
import { useLazyClaimDailyRewardQuery } from '@/entities/users/api/users.api';

export const DailyAdmissionModal = () => {
  const [claimDailyReward] = useLazyClaimDailyRewardQuery()

  const handleClick = async() => {
    await claimDailyReward()
  }

  return (
    <ModalContentWrapper
      title="Ежедневный вход"
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      imageComponent={<DailyAdmissionContent />}
      onClick={handleClick}
      textButton='Забрать'
    />
  );
};