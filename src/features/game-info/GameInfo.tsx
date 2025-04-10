'use client'
import { InfoBlock } from '@/shared/ui/info-block/InfoBlock';

export const GameInfo = () => {
  const enegryProcent = 98

  const throwValue = 10
  const throwTotal = 32

  return (
    <div className='flex items-center justify-between'>
      <InfoBlock title='Enegry:' value={`${enegryProcent}%`}/>
      <InfoBlock title='Броски:' value={`${throwValue}/${throwTotal}`}/>
    </div>
  );
};