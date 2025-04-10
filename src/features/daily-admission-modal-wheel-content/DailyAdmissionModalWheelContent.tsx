'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { WheelSvg } from '@/shared/ui/wheel-svg/WheelSvg';
import { WheelArrow } from '@/shared/ui/wheel-arrow/WheelArrow';
import './DailyAdmissionModalWheelContent.scss';

const list = [
  { photo: '/images/modal/zip.png', value: 'value 1' },
  { photo: '/images/modal/zip.png', value: 'value 2' },
  { photo: '/images/modal/zip.png', value: 'value 3' },
  { photo: '/images/modal/zip.png', value: 'value 4' },
  { photo: '/images/modal/zip.png', value: 'value 5' },
  { photo: '/images/modal/zip.png', value: 'value 6' },
  { photo: '/images/modal/zip.png', value: 'value 7' },
  { photo: '/images/modal/zip.png', value: 'value 8' },
]

interface IProps {
  spin: boolean
  setIsSpined: (value: boolean) => void
}

export const DailyAdmissionModalWheelContent = ({ spin, setIsSpined }: IProps) => {
  const targetIndex = 5;
  const wheelRef = useRef(null);
  
  function rotateWheel(degrees: number) {
    if (wheelRef.current) {
      (wheelRef.current as HTMLDivElement).style.transform = `rotate(${degrees}deg)`;
    }
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 3000)
    }).then(() => setIsSpined(true))
  }

  function getRotationForTargetIndex(index: number) {
    const totalSegments = list.length;
    const degreesPerSegment = 360 / totalSegments;

    const baseRotation = 360 * 3;
    const targetRotation = index * degreesPerSegment;

    return baseRotation + targetRotation + 22.5 + 180;
  }

  useEffect(() => {
    if(spin) {
      rotateWheel(getRotationForTargetIndex(targetIndex));
    }
  }, [spin])

  return (
    <div className='mt-[9.4vw] mb-[12vw] relative'>
      <div style={{transform: `rotate(${180}deg)`}} className="wheel relative" ref={wheelRef}>
        <WheelSvg />
        {list.slice().reverse().map(({ photo, value }, i) => (
          <div
            key={i}
            className="segment"
            style={{ transform: `rotate(${i * 45}deg) translateY(-24vw)` }}
          >
            <Image src={photo} alt={`wheel-item-${value}`} width={50} height={50} quality={100} className='w-50px h-50px' />
          </div>
        ))}
      </div>
      <WheelArrow />
    </div>
  );
};
