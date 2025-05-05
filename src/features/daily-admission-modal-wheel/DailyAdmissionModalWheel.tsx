'use client'
import { ModalContentWrapper } from '@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper';
import { DailyAdmissionModalWheelContent } from '../daily-admission-modal-wheel-content/DailyAdmissionModalWheelContent';
import { useState } from 'react';
import { ModalImage } from '@/shared/ui/modal-image/ModalImage';

export const DailyAdmissionModalWheel = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [spin, setSpin] = useState(false)
  const [isSpined, setIsSpined] = useState(false)

  const handleClick = () => {

  }

  return (
    <>
      {isSpined
        ? (
          <ModalContentWrapper
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Название награды"
            subTitle=""
            imageComponent={<ModalImage photo='/images/modal/zip.png' />}
            onClick={handleClick}
            textButton={'Забрать'}
          />
        )
        : (
          <ModalContentWrapper
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Ежедневный вход"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            imageComponent={<DailyAdmissionModalWheelContent spin={spin} setIsSpined={setIsSpined} />}
            onClick={() => setSpin(true)}
            textButton={'Крутить'}
          />
        )
      }
    </>
  );
};