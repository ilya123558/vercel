'use client'
import { InfoBlock } from '@/shared/ui/info-block/InfoBlock';
import { useAppSelector } from '@/views/store';

export const GameInfo = () => {
  const { user } = useAppSelector(state => state.main)

  if(!user) {
    return <></>
  }

  return (
    <div className='flex items-center justify-between'>
      <InfoBlock title='Enegry:' value={`${user.energyPercent}%`}/>
      <InfoBlock title='Броски:' value={`${user.tossCount}/${user.maxTossCount}`}/>
    </div>
  );
};