'use client'
import { ModalContentWrapper } from '@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper';
import { DailyAdmissionContent } from '../daily-admission-content/DailyAdmissionContent';
import { useDailyRewardInfoQuery, useLazyClaimDailyRewardQuery } from '@/entities/users/api/users.api';
import { setBalance, useAppDispatch, useAppSelector } from '@/views/store';

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const DailyAdmissionModal = ({isOpen, setIsOpen}: IProps) => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.main)
  const { data: dailyRewardInfoData } = useDailyRewardInfoQuery()
  const [ claimDailyReward ] = useLazyClaimDailyRewardQuery()

  const handleClick = async () => {
    if(!dailyRewardInfoData || dailyRewardInfoData.claimedToday) {
      setIsOpen(false)
      return
    }
    
    const response = await claimDailyReward()

    if(response.data && user) {
      const value = dailyRewardInfoData.dayRewards[dailyRewardInfoData.activeDay - 1]
      dispatch(setBalance(user.balance + value))
    }

    setIsOpen(false)
  }

  if(!dailyRewardInfoData) return <></>

  return (
    <ModalContentWrapper
      title="Ежедневный вход"
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      imageComponent={dailyRewardInfoData ? <DailyAdmissionContent {...dailyRewardInfoData} /> : <></>}
      onClick={handleClick}
      textButton={dailyRewardInfoData?.claimedToday ? 'Закрыть' : 'Забрать'}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};